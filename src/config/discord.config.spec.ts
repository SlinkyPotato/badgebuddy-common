import { afterEach, beforeEach, describe } from '@jest/globals';
import { configureDiscordOptions } from './discord.config';
import { ConfigService } from '@nestjs/config';

describe('DiscordConfig', () => {
  const mockConfigService = {
    get: jest.fn().mockReturnThis(),
  };

  beforeEach(() => {
    mockConfigService.get.mockImplementation((key: string) => {
      if (key === 'DISCORD_BOT_TOKEN') {
        return 'discord-bot-token';
      }
      return '';
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(configureDiscordOptions).toBeDefined();
  });

  it('should return newly created options', () => {
    const options = configureDiscordOptions(
      mockConfigService as any as ConfigService,
    );
    expect(options).toBeDefined();
    expect(options).toHaveProperty('token');
    expect(options).toHaveProperty('discordClientOptions');
    expect(options).toHaveProperty('failOnLogin');
  });
});
