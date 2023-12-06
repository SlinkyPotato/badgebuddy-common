import { DataSource } from 'typeorm';
import { 
  AccountEntity, CommunityEventDiscordEntity, CommunityEventEntity, 
  CommunityParticipantsDiscordEntity, 
  DiscordGuildEntity, DiscordUserEntity, PoapClaimsEntity, TokenEntity, 
  UserEntity 
} from './entities';
import { AUTH_ACCOUNT_REPOSITORY, AUTH_TOKEN_REPOSITORY, AUTH_USER_REPOSITORY, 
  COMMUNITY_EVENT_DISCORD_REPOSITORY, COMMUNITY_EVENT_PARTICIPANTS_DISCORD_REPOSITORY, 
  COMMUNITY_EVENT_REPOSITORY, DISCORD_BOT_SETTINGS_REPOSITORY, DISCORD_USER_REPOSITORY, POAP_CLAIMS_REPOSITORY 
} from './common-typeorm.constants';
import { DiscordBotSettingsEntity } from './entities/discord/discord-guild.entity';

export const UserRepositoryProvider = {
  provide: AUTH_USER_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
  inject: ['DATA_SOURCE'],
};

export const AccountRepositoryProvider = {
  provide: AUTH_ACCOUNT_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(AccountEntity),
  inject: ['DATA_SOURCE'],
};

export const TokenRepositoryProvider = {
  provide: AUTH_TOKEN_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(TokenEntity),
  inject: ['DATA_SOURCE'],
};

export const CommunityEventRepositoryProvider = {
  provide: COMMUNITY_EVENT_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(CommunityEventEntity),
  inject: ['DATA_SOURCE'],
};

export const CommunityEventDiscordRepositoryProvider = {
  provide: COMMUNITY_EVENT_DISCORD_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(CommunityEventDiscordEntity),
  inject: ['DATA_SOURCE'],
};

export const CommunityEventParticipantDiscordRepositoryProvider = {
  provide: COMMUNITY_EVENT_PARTICIPANTS_DISCORD_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(CommunityParticipantsDiscordEntity),
  inject: ['DATA_SOURCE'],
};

export const DiscordUserRepsoitoryProvider = {
  provide: DISCORD_USER_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DiscordUserEntity),
  inject: ['DATA_SOURCE'],
};

export const DiscordBotSettingsRepositoryProvider = {
  provide: DISCORD_BOT_SETTINGS_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DiscordGuildEntity),
  inject: ['DATA_SOURCE'],
};

export const DiscordGuildBotSettingsRepositoryProvider = {
  provide: DISCORD_BOT_SETTINGS_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(DiscordBotSettingsEntity),
  inject: ['DATA_SOURCE'],
};

export const PoapClaimsRepositoryProvider = {
  provide: POAP_CLAIMS_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(PoapClaimsEntity),
  inject: ['DATA_SOURCE'],
};

