import * as index from './index';

import { describe, it, expect } from '@jest/globals';
describe('index', () => {
  it('index should be defined', () => {
    expect(index).toBeDefined();
  });

  it('should have imports defined', () => {
    expect(index.parseReleaseUtil).toBeDefined();
    expect(index.CommonPinoLogger).toBeDefined();
    expect(index.CommonPinoLoggerModule).toBeDefined();
    expect(index.CommonPinoLoggerService).toBeDefined();
    expect(index.EventType).toBeDefined();
    expect(index.NodeEnvs).toBeDefined();
    expect(index.DiscordParticipantRedisDto).toBeDefined();
  });
});
