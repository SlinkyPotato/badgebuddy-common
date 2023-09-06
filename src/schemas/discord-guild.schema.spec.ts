import { describe, it, expect, beforeEach } from '@jest/globals';
import { DiscordGuild } from './discord-guild.schema';

describe('DiscordGuildSchema', () => {
  let discordGuild: DiscordGuild;

  beforeEach(async () => {
    discordGuild = new DiscordGuild();
    discordGuild.guildId = '850840267082563596';
    discordGuild.guildName = 'Test guild';
    discordGuild.privateChannelId = '850840267082563600';
    discordGuild.newsChannelId = '1130525131937161286';
    discordGuild.poapManagerRoleId = '1130525129131167786';
  });

  it('should be defined', () => {
    expect(discordGuild).toBeDefined();
  });

  it('should have guildId', () => {
    expect(discordGuild.guildId).toBeDefined();
  });

  it('should have guildName', () => {
    expect(discordGuild.guildName).toBeDefined();
  });

  it('should have privateChannelId', () => {
    expect(discordGuild.privateChannelId).toBeDefined();
  });

  it('should have newsChannelId', () => {
    expect(discordGuild.newsChannelId).toBeDefined();
  });

  it('should have poapManagerRoleId', () => {
    expect(discordGuild.poapManagerRoleId).toBeDefined();
  });
});
