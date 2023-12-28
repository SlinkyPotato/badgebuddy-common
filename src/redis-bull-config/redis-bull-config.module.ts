import { DynamicModule, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodeEnvs } from '../enums/node-envs.enum';

@Module({})
export class RedisBullConfigModule {
  static forRootAsync(options = {}): DynamicModule {
    return {
      module: RedisBullConfigModule,
      imports: [
        BullModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            switch (configService.get<string>('NODE_ENV')) {
              case NodeEnvs.PRODUCTION:
                return {
                  redis: {
                    path: '/app/redis/redis.sock',
                    db: 0,
                  },
                  ...options,
                };
              case NodeEnvs.STAGING:
                return {
                  redis: {
                    path: '/app/redis/redis.sock',
                    db: 1,
                  },
                  ...options,
                };
              default:
                return {
                  redis: {
                    host: configService.get<string>('REDIS_HOST'),
                    port: configService.get<number>('REDIS_PORT'),
                  },
                  ...options,
                };
            }
          },
        }),
      ],
      providers: [],
      exports: [BullModule],
    };
  }
}
