import { Injectable, LoggerService } from '@nestjs/common';
import { CommonPinoLogger } from './common-pino.logger';

@Injectable()
export class CommonPinoLoggerService implements LoggerService {
  constructor(private pinoLogger: CommonPinoLogger) {}

  error(message: any, ...optionalParams: any[]): any {
    if (optionalParams.length > 0) {
      this.pinoLogger.error({ ...optionalParams }, message);
    } else {
      this.pinoLogger.error(message);
    }
  }

  log(message: any, ...optionalParams: any[]): any {
    if (optionalParams.length > 0) {
      this.pinoLogger.info({ ...optionalParams }, message);
    } else {
      this.pinoLogger.info(message);
    }
  }

  warn(message: any, ...optionalParams: any[]): any {
    if (optionalParams.length > 0) {
      this.pinoLogger.warn({ ...optionalParams }, message);
    } else {
      this.pinoLogger.warn(message);
    }
  }

  debug(message: any, ...optionalParams: any[]): any {
    if (optionalParams.length > 0) {
      this.pinoLogger.debug({ ...optionalParams }, message);
    } else {
      this.pinoLogger.debug(message);
    }
  }

  verbose(message: any, ...optionalParams: any[]): any {
    if (optionalParams.length > 0) {
      this.pinoLogger.trace({ ...optionalParams }, message);
    } else {
      this.pinoLogger.trace(message);
    }
  }
}