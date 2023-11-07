import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';

@Module({})
export class CommonConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: CommonConfigModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          cache: true,
          validationSchema: Joi.object({
            NODE_ENV: Joi.string().required(),
            REDIS_HOST: Joi.string().optional(),
            REDIS_PORT: Joi.number().optional(),
            MONGODB_URI: Joi.string().optional(),
            LOGTAIL_TOKEN: Joi.string().optional(),
            DISCORD_BOT_TOKEN: Joi.string().required(),
            DISCORD_BOT_APPLICATION_ID: Joi.string().required(),
            DISCORD_BOT_PUBLIC_KEY: Joi.string().required(),
            DISCORD_OWNER_ID: Joi.string().required(),
            LOG_LEVEL: Joi.string()
              .required()
              .pattern(/^(fatal|error|warn|info|debug|trace)$/),
          }),
          validationOptions: {},
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigModule],
    };
  }
}
