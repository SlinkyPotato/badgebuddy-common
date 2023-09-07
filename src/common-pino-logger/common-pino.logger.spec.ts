import { beforeEach, describe } from '@jest/globals';
import { CommonPinoLogger } from './common-pino.logger';

describe('CommonPinoLogger', () => {
  let commonPinoLogger: CommonPinoLogger;
  beforeEach(() => {
    commonPinoLogger = new CommonPinoLogger('test');
  });

  it('should be defined', () => {
    expect(commonPinoLogger).toBeTruthy();
  });

  it('should log info', () => {
    commonPinoLogger.info('test info');
  });

  it('should log error', () => {
    commonPinoLogger.error('test error');
  });

  it('should log warn', () => {
    commonPinoLogger.warn('test warn');
  });

  it('should log debug', () => {
    commonPinoLogger.debug('test debug');
  });

  it('should log fatal', () => {
    commonPinoLogger.fatal('test fatal');
  });

  it('should log trace', () => {
    commonPinoLogger.trace('test trace');
  });
});
