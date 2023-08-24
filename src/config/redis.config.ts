import { redisStore } from 'cache-manager-redis-yet';
import { CacheManagerOptions } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { NodeEnvs } from '../enums/node-envs.enum';
import { BullRootModuleOptions } from '@nestjs/bull';
import { RedisClientOptions } from 'redis';

const REDIS_SOCKET_PATH = '/app/redis/redis.sock';

export const configureCache = (
  configService: ConfigService,
): CacheManagerOptions & RedisClientOptions => {
  switch (configService.get<string>('NODE_ENV')) {
    case NodeEnvs.PRODUCTION.toString():
      return {
        store: redisStore,
        socket: {
          path: REDIS_SOCKET_PATH,
        },
        database: 0,
        ttl: 1000 * 60 * 60 * 24, // 1 day
      };
    case NodeEnvs.STAGING.toString():
      return {
        store: redisStore,
        socket: {
          path: REDIS_SOCKET_PATH,
        },
        database: 1,
        ttl: 1000 * 60 * 60, // 1 hour
      };
    default:
      return {
        store: redisStore,
        socket: {
          host: configService.get<string>('REDIS_HOST', { infer: true }),
          port: configService.get<number>('REDIS_PORT', { infer: true }),
        },
        ttl: 1000 * 60, // 1 minute
      };
  }
};

export const configureBull = (
  configService: ConfigService,
): BullRootModuleOptions => {
  switch (configService.get<string>('NODE_ENV')) {
    case NodeEnvs.PRODUCTION.toString():
      return {
        redis: {
          path: REDIS_SOCKET_PATH,
          db: 0,
        },
      };
    case NodeEnvs.STAGING.toString():
      return {
        redis: {
          path: REDIS_SOCKET_PATH,
          db: 1,
        },
      };
    default:
      return {
        redis: {
          host: configService.get<string>('REDIS_HOST', { infer: true }),
          port: configService.get<number>('REDIS_PORT', { infer: true }),
        },
      };
  }
};
