import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { joiValidationConfig } from '../config/joi-validation.config';

@Module({})
@Global()
export class CommonConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: CommonConfigModule,
      imports: [
        ConfigModule.forRoot({
          ignoreEnvFile: true,
          cache: true,
          validationSchema: joiValidationConfig,
          validationOptions: {},
        }),
      ],
      providers: [ConfigService],
      exports: [ConfigModule, ConfigService],
    };
  }
}
