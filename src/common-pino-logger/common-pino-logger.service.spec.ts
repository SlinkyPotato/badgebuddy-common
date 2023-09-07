import { CommonPinoLoggerService } from './common-pino-logger.service';
import { CommonPinoLogger } from './common-pino.logger';
import { Test } from '@nestjs/testing';
import { CommonPinoLoggerModule } from './common-pino-logger.module';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('CommonPinoLoggerService', () => {
  const logger: any = {
    error: jest.fn().mockReturnThis(),
    info: jest.fn().mockReturnThis(),
    warn: jest.fn().mockReturnThis(),
    debug: jest.fn().mockReturnThis(),
    trace: jest.fn().mockReturnThis(),
  };

  let service: CommonPinoLoggerService;

  beforeEach(async () => {
    service = new CommonPinoLoggerService(logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call log', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call log with params', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call error', () => {
    const spy = jest.spyOn(logger, 'error');
    service.error('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call error with params', () => {
    const spy = jest.spyOn(logger, 'error');
    service.error('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call warn', () => {
    const spy = jest.spyOn(logger, 'warn');
    service.warn('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call warn with params', () => {
    const spy = jest.spyOn(logger, 'warn');
    service.warn('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call debug', () => {
    const spy = jest.spyOn(logger, 'debug');
    service.debug('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call debug with params', () => {
    const spy = jest.spyOn(logger, 'debug');
    service.debug('test', { test: 'test' });
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

  it('should call log', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call log with params', () => {
    const spy = jest.spyOn(logger, 'info');
    service.log('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call error', () => {
    const spy = jest.spyOn(logger, 'error');
    service.error('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call error with params', () => {
    const spy = jest.spyOn(logger, 'error');
    service.error('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call warn', () => {
    const spy = jest.spyOn(logger, 'warn');
    service.warn('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call warn with params', () => {
    const spy = jest.spyOn(logger, 'warn');
    service.warn('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call debug', () => {
    const spy = jest.spyOn(logger, 'debug');
    service.debug('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call debug with params', () => {
    const spy = jest.spyOn(logger, 'debug');
    service.debug('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call verbose', () => {
    const spy = jest.spyOn(logger, 'trace');
    service.verbose('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call verbose with params', () => {
    const spy = jest.spyOn(logger, 'trace');
    service.verbose('test', { test: 'test' });
    expect(spy).toHaveBeenCalled();
  });
});
