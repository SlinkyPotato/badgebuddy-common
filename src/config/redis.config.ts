import { redisStore } from 'cache-manager-redis-yet';
import { ConfigService } from '@nestjs/config';
import { NodeEnvs } from '../enums/node-envs.enum';
import { BullRootModuleOptions } from '@nestjs/bull';

const REDIS_SOCKET_PATH = '/app/redis/redis.sock';

export const configureCacheOptions = (
  configService: ConfigService,
  options: any = {},
) => {
  options.store = redisStore;
  options.socket ??= {};
  switch (configService.get<string>('NODE_ENV')) {
    case NodeEnvs.PRODUCTION:
      options.socket.path ??= REDIS_SOCKET_PATH;
      options.database = 0;
      options.ttl ??= 1000 * 60 * 60 * 24; // 1 day
      break;
    case NodeEnvs.STAGING:
      options.socket.path ??= REDIS_SOCKET_PATH;
      options.database = 1;
      options.ttl = options.ttl ?? 1000 * 60 * 60; // 1 hour
      break;
    default:
      options.socket.host ??= configService.get<string>('REDIS_HOST');
      options.socket.port ??= configService.get<number>('REDIS_PORT');
      options.ttl = options.ttl ?? 1000 * 60; // 1 minute
      break;
  }
  return options;
};

export const configureBullOptions = (
  configService: ConfigService,
  options: any = {},
): BullRootModuleOptions => {
  options.redis ??= {};
  switch (configService.get<string>('NODE_ENV')) {
    case NodeEnvs.PRODUCTION:
      options.redis.path ??= REDIS_SOCKET_PATH;
      options.redis.db = 0;
      break;
    case NodeEnvs.STAGING:
      options.redis.path ??= REDIS_SOCKET_PATH;
      options.redis.db = 1;
      break;
    default:
      options.redis.host ??= configService.get<string>('REDIS_HOST');
      options.redis.port ??= configService.get<number>('REDIS_PORT');
      break;
  }
  return options;
};
