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

  const redisSocket = process.env.REDIS_SOCKET
    ? { socket: { path: process.env.REDIS_SOCKET } }
    : {
        socket: {
          host: process.env.REDIS_HOST,
          port: parseInt(process.env.REDIS_PORT),
        },
      };

  const redisClient = redis.createClient(redisSocket);

  redisClient.on('error', (err) => {
    console.error('Redis error: ', err);
  });

  await redisClient.connect();
  console.log('connected to redis');

  const bulkWriteOps = [];
  const endDate = new Date();

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
      discordParticipant.endDate = endDate;
      discordParticipant.durationInMinutes =
        (endDate.getTime() - discordParticipant.startDate.getTime()) /
        1000 /
        60;

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
    .bulkWrite(bulkWriteOps, { ordered: true })
    .catch((err) => {
      console.error(err);
    });

  console.log(result);

  if (!result) {
    throw new Error('failed to backup redis cache');
  }

  await mongoConn.disconnect();
  await redisClient.disconnect();

  console.log('backup of redis cache complete');
};

export { backupRedisCacheUtil };
