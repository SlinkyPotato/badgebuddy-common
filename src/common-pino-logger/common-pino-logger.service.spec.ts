import { CommonPinoLoggerService } from './common-pino-logger.service';
import { CommonPinoLogger } from './common-pino.logger';
import { Test } from '@nestjs/testing';
import { CommonPinoLoggerModule } from './common-pino-logger.module';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('CommonPinoLoggerService', () => {
  let logger: CommonPinoLogger;
  let service: CommonPinoLoggerService;

  beforeEach(async () => {
    logger = new CommonPinoLogger('test');
    service = new CommonPinoLoggerService(logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should log with params', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });
});

describe('CommonPinoLoggerServiceInjection', () => {
  let logger: CommonPinoLogger;
  let service: CommonPinoLoggerService;

  beforeEach(async () => {
    logger = new CommonPinoLogger('test');
    const module = await Test.createTestingModule({
      imports: [CommonPinoLoggerModule.forRoot(logger)],
    }).compile();

    service = module.get<CommonPinoLoggerService>(CommonPinoLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should log', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should log with params', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });
});
