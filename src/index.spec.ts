import { describe, it } from '@jest/globals';
import * as index from './index';

describe('index', () => {
  it('index should be defined', () => {
    expect(index).toBeDefined();
  });

  it('should have imports defined', () => {
    expect(index.parseReleaseUtil).toBeDefined();
    expect(index.backupRedisCacheUtil).toBeDefined();
    expect(index.loadRedisCacheUtil).toBeDefined();
    expect(index.CommonPinoLogger).toBeDefined();
    expect(index.CommonPinoLoggerModule).toBeDefined();
    expect(index.CommonPinoLoggerService).toBeDefined();
    expect(index.EventType).toBeDefined();
    expect(index.NodeEnvs).toBeDefined();
    expect(index.RedisDiscordParticipantDto).toBeDefined();
  });
});
