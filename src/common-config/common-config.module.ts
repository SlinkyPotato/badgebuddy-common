import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi, { SchemaMap } from 'joi';

@Module({})
export class CommonConfigModule {
  static forRoot(options: {validationSchema: SchemaMap<any>} = {validationSchema: null}): DynamicModule {
    return {
      module: CommonConfigModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          cache: true,
          validationSchema: Joi.object({
            NODE_ENV: Joi.string().required(),
            LOGTAIL_TOKEN: Joi.string().optional(),
            DISCORD_BOT_TOKEN: Joi.string().required(),
            DISCORD_BOT_APPLICATION_ID: Joi.string().required(),
            DISCORD_BOT_PUBLIC_KEY: Joi.string().required(),
            DISCORD_OWNER_ID: Joi.string().required(),
            LOG_LEVEL: Joi.string()
              .required()
              .pattern(/^(fatal|error|warn|info|debug|trace)$/),
            ...options.validationSchema,
          }),
          validationOptions: {},
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigModule],
    };
  }
}
