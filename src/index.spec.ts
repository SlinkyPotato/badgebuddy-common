import { describe } from '@jest/globals';
import * as index from './index';

describe('index', () => {
  it('index should be defined', () => {
    expect(index).toBeDefined();
  });

  it('should have imports defined', () => {
    expect(index.parseChangesFile).toBeDefined();
    expect(index.backupRedisCacheUtil).toBeDefined();
    expect(index.loadRedisCacheUtil).toBeDefined();
    expect(index.CommonPinoLogger).toBeDefined();
    expect(index.CommonPinoLoggerModule).toBeDefined();
    expect(index.CommonPinoLoggerService).toBeDefined();
    expect(index.joiValidationConfig).toBeDefined();
    expect(index.configureCacheOptions).toBeDefined();
    expect(index.configureBullOptions).toBeDefined();
    expect(index.CommunityEvent).toBeDefined();
    expect(index.CommunityEventDto).toBeDefined();
    expect(index.CommunityEventSchema).toBeDefined();
    expect(index.DiscordGuild).toBeDefined();
    expect(index.DiscordGuildSchema).toBeDefined();
    expect(index.DiscordParticipant).toBeDefined();
    expect(index.DiscordParticipantSchema).toBeDefined();
    expect(index.EventType).toBeDefined();
    expect(index.NodeEnvs).toBeDefined();
    expect(index.DiscordParticipantDto).toBeDefined();
  });
});
