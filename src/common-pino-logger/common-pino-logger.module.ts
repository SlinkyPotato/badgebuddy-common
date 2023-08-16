import { Module } from '@nestjs/common';
import { CommonPinoLoggerService } from './common-pino-logger.service';
import { CommonPinoLogger } from './common-pino.logger';

@Module({})
export class CommonPinoLoggerModule {
  static forRoot(logger: CommonPinoLogger) {
    return {
      module: CommonPinoLoggerModule,
      providers: [
        {
          provide: CommonPinoLoggerService,
          useValue: new CommonPinoLoggerService(logger),
        },
      ],
      exports: [CommonPinoLoggerService],
    };
  }
}
