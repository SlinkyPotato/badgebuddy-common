import { DynamicModule, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { NodeEnvs } from '../enums/node-envs.enum';

@Module({})
export class RedisConfigModule {
  static forRootAsync(options = {}): DynamicModule {
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
                  ttl: 1000 * 60 * 60 * 24, // 1 day
                  ...options,
                };
              case NodeEnvs.STAGING:
                return {
                  store: redisStore,
                  socket: {
                    path: '/app/redis/redis.sock',
                  },
                  database: 1,
                  ttl: 1000 * 60 * 60, // 1 hour
                  ...options,
                };
              default:
                return {
                  store: redisStore,
                  socket: {
                    host: configService.get<string>('REDIS_HOST'),
                    port: configService.get<number>('REDIS_PORT'),
                  },
                  ttl: 1000 * 60, // 1 minute,
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
