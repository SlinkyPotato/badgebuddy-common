import { GatewayIntentBits, Partials } from 'discord.js';
import { ConfigService } from '@nestjs/config';
import { DiscordModuleOption } from '@discord-nestjs/core';

export const configureDiscordOptions = (
  configService: ConfigService,
): Promise<DiscordModuleOption> | DiscordModuleOption => ({
  token: configService.get('DISCORD_BOT_TOKEN', { infer: true }),
  discordClientOptions: {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
    ],
    partials: [
      Partials.Message,
      Partials.Channel,
      Partials.Reaction,
      Partials.User,
    ],
  },
  failOnLogin: true,
});
