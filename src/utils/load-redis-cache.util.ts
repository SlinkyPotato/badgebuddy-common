import * as mongoose from 'mongoose';
import redis from 'redis';
import { DiscordParticipantSchema } from '../schemas/discord-participant.schema';
import { CommunityEventSchema } from '../schemas/community-event.schema';
import { DiscordParticipantDto } from '../dto/discord-participant.dto';

/**
 * Backup Redis Cache
 * 1. Pull all active community events from MongoDB
 * 2. Pull all participants keys using eventId
 * 3. Pull all participants from Redis using keys
 * 4. Backup participants to MongoDB
 */
const loadRedisCacheUtil = async () => {
  console.log('attempting to load redis cache');
  const mongoConn = await mongoose.connect(process.env.MONGODB_URI);
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
    process.exit(0);
  }

  const redisClient = redis.createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
    },
  });

  redisClient.on('error', (err) => {
    console.error('Redis error: ', err);
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

      const cacheParticipant = new DiscordParticipantDto();
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

  await mongoConn.disconnect();
  await redisClient.disconnect();

  console.log('load redis cache complete');
};

export { loadRedisCacheUtil };
