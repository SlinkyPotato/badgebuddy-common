import { afterEach, describe, jest } from '@jest/globals';
import { configureCacheOptions, configureBullOptions } from './redis.config';
import { NodeEnvs } from '../enums/node-envs.enum';

describe('RedisConfig', () => {
  const mockConfigService: any = {
    get: jest.fn(),
  };

  beforeEach(() => {
    mockConfigService.get.mockImplementation((key: string) => {
      switch (key) {
        case 'NODE_ENV':
          return NodeEnvs.DEVELOPMENT;
        case 'REDIS_HOST':
          return 'localhost';
        case 'REDIS_PORT':
          return 6379;
      }
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('configureCacheOptions', () => {
    it('should be defined', () => {
      expect(configureCacheOptions).toBeDefined();
    });

    it('should return newly created options for development', () => {
      const options = configureCacheOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('store');
      expect(options).toHaveProperty('socket');
      expect(options).toHaveProperty('ttl');
      expect(options).toHaveProperty('socket.port');
      expect(options).toHaveProperty('socket.host');
      expect(options.database).toBeUndefined();
      expect(options.ttl).toBe(1000 * 60);
    });

    it('should return newly created options for staging', () => {
      mockConfigService.get.mockImplementation((key: string) => {
        switch (key) {
          case 'NODE_ENV':
            return NodeEnvs.STAGING;
        }
      });
      const options = configureCacheOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('store');
      expect(options).toHaveProperty('socket');
      expect(options).toHaveProperty('ttl');
      expect(options).toHaveProperty('socket.path');
      expect(options.database).toBe(1);
      expect(options.socket.path).toBe('/app/redis/redis.sock');
      expect(options.ttl).toBe(1000 * 60 * 60);
    });

    it('should return newly created options for production', () => {
      mockConfigService.get.mockImplementation((key: string) => {
        switch (key) {
          case 'NODE_ENV':
            return NodeEnvs.PRODUCTION;
        }
      });
      const options = configureCacheOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('store');
      expect(options).toHaveProperty('socket');
      expect(options).toHaveProperty('ttl');
      expect(options).toHaveProperty('socket.path');
      expect(options.database).toBe(0);
      expect(options.socket.path).toBe('/app/redis/redis.sock');
      expect(options.ttl).toBe(1000 * 60 * 60 * 24);
    });
  });

  describe('configureBull', () => {
    it('should be defined', () => {
      expect(configureBullOptions).toBeDefined();
    });

    it('should return newly created options for development', () => {
      const options = configureBullOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('redis');
      expect(options).toHaveProperty('redis.port');
      expect(options).toHaveProperty('redis.host');
      expect((options.redis as any).host).toEqual('localhost');
      expect((options.redis as any).port).toEqual(6379);
    });

    it('should return newly created options for staging', () => {
      mockConfigService.get.mockImplementation((key: string) => {
        switch (key) {
          case 'NODE_ENV':
            return NodeEnvs.STAGING;
        }
      });
      const options = configureBullOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('redis');
      expect(options).toHaveProperty('redis.path');
      expect(options).toHaveProperty('redis.db');
      expect((options.redis as any).db).toBe(1);
      expect((options.redis as any).path).toBe('/app/redis/redis.sock');
    });

    it('should return newly created options for production', () => {
      mockConfigService.get.mockImplementation((key: string) => {
        switch (key) {
          case 'NODE_ENV':
            return NodeEnvs.PRODUCTION;
        }
      });
      const options = configureBullOptions(mockConfigService);
      expect(options).toBeDefined();
      expect(options).toHaveProperty('redis');
      expect(options).toHaveProperty('redis.path');
      expect(options).toHaveProperty('redis.db');
      expect((options.redis as any).db).toBe(0);
      expect((options.redis as any).path).toBe('/app/redis/redis.sock');
    });
  });
});
