import { DataSource } from 'typeorm';
import { DiscordGuildBotSettingsEntity } from './entities';

export const DiscordGuildBotSettingsRepositoryProvider = {
  provide: 'DISCORD_GUILD_BOT_SETTINGS_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DiscordGuildBotSettingsEntity),
  inject: ['DATA_SOURCE'],
} as const;
