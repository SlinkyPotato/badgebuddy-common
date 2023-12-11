import { DynamicModule, Module } from '@nestjs/common';
import { DiscordModule, DiscordModuleOption } from '@discord-nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GatewayIntentBits, Partials } from 'discord.js';

@Module({})
export class DiscordConfigModule {
  static forRootAsync(options?: DiscordModuleOption): DynamicModule {
    return {
      module: DiscordConfigModule,
      imports: [
        DiscordModule.forRootAsync({
          inject: [ConfigService],
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => ({
            token: configService.get('DISCORD_BOT_TOKEN'),
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
            ...options,
          })
        })
      ],
      exports: [DiscordModule],
    };
  }
}
