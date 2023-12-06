import * as mongoose from 'mongoose';
import * as redis from 'redis';
import { DiscordParticipantSchema } from '../schemas/discord-participant.schema';
import { CommunityEventSchema } from '../schemas/community-event.schema';
import { RedisDiscordParticipantDto } from '../redis-config/dto/discord-participant.dto';

/**
 * Backup Redis Cache
 * 1. Pull all active community events from MongoDB
 * 2. Pull all participants keys using eventId
 * 3. Pull all participants from Redis using keys
 * 4. Backup participants to MongoDB
 */
const loadRedisCacheUtil = async () => {
  console.log('attempting to load redis cache');
  let mongoConn;
  let redisClient;
  let exitCode = 0;

  try {
    mongoConn = await mongoose.connect(process.env.MONGODB_URI);
    const discordParticipantModel = mongoConn.model(
      'discordParticipant',
      DiscordParticipantSchema,
    );
    const communityEventModel = mongoConn.model(
      'communityEvent',
      CommunityEventSchema,
    );
    const communityEvents = await communityEventModel
      .find({
        isActive: true,
      })
      .exec();
    console.log(`found ${communityEvents.length} active community events`);

    if (communityEvents.length === 0) {
      console.log('no active community events found');
      mongoConn.connection.close();
      process.exit(0);
    }

    const redisSocket = process.env.REDIS_SOCKET
      ? { socket: { path: process.env.REDIS_SOCKET } }
      : {
          socket: {
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT),
          },
        };

    redisClient = redis.createClient(redisSocket);

    redisClient.on('error', (err) => {
      console.error('Redis error: ', err);
      throw new Error('failed to backup redis cache');
    });

    await redisClient.connect();
    console.log('connected to redis');

    for (const event of communityEvents) {
      const participants = await discordParticipantModel
        .find({
          communityEvent: event._id,
        })
        .exec();

      console.log(
        `found ${
          participants.length
        } participants for event ${event._id.toString()}`,
      );
      for (const participant of participants) {
        console.log(JSON.stringify(participant));

        const cacheParticipant = new RedisDiscordParticipantDto();
        cacheParticipant.eventId = participant.communityEvent.toString();
        cacheParticipant.userId = participant.userId;
        cacheParticipant.userTag = participant.userTag;
        cacheParticipant.startDate = participant.startDate;
        cacheParticipant.endDate = participant.endDate;
        cacheParticipant.durationInMinutes = participant.durationInMinutes;

        await redisClient.set(
          `tracking:events:${event._id.toString()}:participants:${
            cacheParticipant.userId
          }`,
          JSON.stringify(cacheParticipant),
        );
      }
    }

    console.log('load redis cache complete');
  } catch (e) {
    console.error(e);
    exitCode = 1;
  } finally {
    if (mongoConn) await mongoConn.connection.close();
    if (redisClient) await redisClient.disconnect();
    process.exit(exitCode);
  }
};

export { loadRedisCacheUtil };
