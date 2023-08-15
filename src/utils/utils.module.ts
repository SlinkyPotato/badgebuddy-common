import { Module } from '@nestjs/common';
import { CommonPinoLoggerModule } from './common-pino-logger/common-pino-logger.module';

@Module({
  imports: [CommonPinoLoggerModule],
})
export class UtilsModule {}
