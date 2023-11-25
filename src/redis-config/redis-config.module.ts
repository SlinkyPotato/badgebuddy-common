import { DynamicModule, Module } from '@nestjs/common';
import { CacheModule, CacheManagerOptions } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { NodeEnvs } from '../enums/node-envs.enum';
import { RedisClientOptions } from 'redis';

/**
 * RedisConfigModule
 * @export RedisConfigModule
 * @class RedisConfigModule
 * @description Configure the redis cache manager
 */
@Module({})
export class RedisConfigModule {
  static forRootAsync(options: CacheManagerOptions & RedisClientOptions = {}): DynamicModule {
    return {
      module: RedisConfigModule,
      imports: [
        CacheModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          isGlobal: true,
          useFactory: async (configService: ConfigService) => {
            switch (configService.get<string>('NODE_ENV')) {
              case NodeEnvs.PRODUCTION:
                return {
                  store: redisStore,
                  socket: {
                    path: '/app/redis/redis.sock',
                  },
                  database: 0,
                  ttl: 1000 * 60 * configService.get<number>('REDIS_CACHE_MIN'),
                  ...options,
                };
              case NodeEnvs.STAGING:
                return {
                  store: redisStore,
                  socket: {
                    path: '/app/redis/redis.sock',
                  },
                  database: 1,
                  ttl: 1000 * 60 * configService.get<number>('REDIS_CACHE_MIN'),
                  ...options,
                };
              default:
                return {
                  store: redisStore,
                  socket: {
                    host: configService.get<string>('REDIS_HOST'),
                    port: configService.get<number>('REDIS_PORT'),
                  },
                  ttl: 1000 * 60 * configService.get<number>('REDIS_CACHE_MIN'),
                  ...options,
                };
            }
          },
        }),
      ],
      providers: [],
      exports: [RedisConfigModule],
    };
  }
}
