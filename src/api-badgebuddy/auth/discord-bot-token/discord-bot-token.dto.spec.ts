import { DiscordBotTokenDto } from './discord-bot-token.dto';
import { describe, it, expect } from '@jest/globals';

describe('DiscordBotTokenDto', () => {
  it('should be defined', () => {
    expect(new DiscordBotTokenDto()).toBeDefined();
  });
});
