import * as mongoose from 'mongoose';
import * as redis from 'redis';
import {
  DiscordParticipant,
  DiscordParticipantSchema,
} from '../schemas/discord-participant.schema';
import { CommunityEventSchema } from '../schemas/community-event.schema';

/**
 * Backup Redis Cache
 * 1. Pull all active community events from MongoDB
 * 2. Pull all participants keys using eventId
 * 3. Pull all participants from Redis using keys
 * 4. Backup participants to MongoDB
 */
const backupRedisCacheUtil = async () => {
  console.log('attempting to backup redis cache');
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

    const bulkWriteOps = [];

    for (const event of communityEvents) {
      const keys = await redisClient.keys(
        `tracking:events:${event._id.toString()}:participants:*`,
      );
      console.log(
        `found ${keys.length} participants for event ${event._id.toString()}`,
      );
      for (const redisKey of keys) {
        const participant = JSON.parse(await redisClient.get(redisKey));
        console.log(JSON.stringify(participant));

        const discordParticipant = new DiscordParticipant();
        discordParticipant.communityEvent = new mongoose.Types.ObjectId(
          participant.eventId,
        );
        discordParticipant.userId = participant.userId;
        discordParticipant.userTag = participant.userTag;
        discordParticipant.startDate = new Date(participant.startDate);
        discordParticipant.endDate = participant.endDate;
        discordParticipant.durationInMinutes = participant.durationInMinutes;

        bulkWriteOps.push({
          updateOne: {
            filter: {
              communityEvent: discordParticipant.communityEvent,
              userId: discordParticipant.userId,
            },
            update: discordParticipant,
            upsert: true,
          },
        });
      }
    }

    const result = await discordParticipantModel
      .bulkWrite(bulkWriteOps, { ordered: false })
      .catch((err) => {
        console.error(err);
      });

    console.log(result);

    if (!result) {
      throw new Error('failed to backup redis cache');
    }

    console.log('backup of redis cache complete');
  } catch (e) {
    console.error(e);
    exitCode = 1;
  } finally {
    if (mongoConn) await mongoConn.connection.close();
    if (redisClient) await redisClient.disconnect();
    process.exit(exitCode);
  }
};

export { backupRedisCacheUtil };
