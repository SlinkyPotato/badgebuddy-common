/**
 * Redis keys used with the cache manager.
 * The keys are also used in CACHE INTERCEPTORS.
 * @see https://docs.nestjs.com/techniques/caching#redis
 */

// Auth
export const AUTH_REQUEST = (clientId: string, authCode: string) =>
  `auth:request:${clientId}:${authCode}` as const;

export const AUTH_REQUEST_GOOGLE = (sessionId: string) =>
  `auth:request:google:${sessionId}` as const;

export const AUTH_REQUEST_DISCORD = (sessionId: string) =>
  `auth:request:discord:${sessionId}` as const;

export const AUTH_EMAIL_VERIFY = (email: string) =>
  `auth:verify:${email}` as const;

export const AUTH_REFRESH_TOKEN = (userId: string) =>
  `auth:refreshToken:${userId}` as const;

// Discord Bot Settings
export const DISCORD_BOT_SETTINGS_GUILDSID = (guildSId: string) =>
  `/discord/bot/settings?guildSId=${guildSId}` as const;

export const DISCORD_BOT_SETTINGS = (botSettingsId: string) =>
  `/discord/bot/settings?botSettingsId=${botSettingsId}` as const;

// Discord Community Events
export const COMMUNITY_EVENTS_ACTIVE_DISCORD =
  `/community-events/active/discord` as const;

export const COMMUNITY_EVENTS_ACTIVE_DISCORD_ID = (id: string) =>
  `/community-events/active/discord/id/${id}` as const;

export const COMMUNITY_EVENTS_ACTIVE_DISCORD_GUILD = (guildSId: string) =>
  `/community-events/active/discord/guild/${guildSId}` as const;

export const COMMUNITY_EVENTS_ACTIVE_DISCORD_VOICE_CHANNEL = (
  voiceChannelSId: string,
) =>
  `/community-events/active/discord/voice-channel/${voiceChannelSId}` as const;

export const COMMUNITY_EVENTS_ACTIVE_DISCORD_ORGANIZER = (
  organizerSId: string,
) => `/community-events/active/discord/organizer/${organizerSId}`;

export const COMMUNITY_EVENTS_ACTIVE_DISCORD_GUILD_ORGANIZER = (
  organizerSId: string,
  guildSId: string,
) =>
  `/community-events/active/discord/guild/${guildSId}/organizer/${organizerSId}`;

// Discord Processor
export const TRACKING_EVENTS_ACTIVE = (voiceChannelSId: string) =>
  `tracking:events:active:voiceChannelSId:${voiceChannelSId}` as const;

export const TRACKING_EVENTS_PARTICIPANTS = (
  communityEventId: string,
  discordUserSId: string,
) =>
  `tracking:events:${communityEventId}:participants:${discordUserSId}` as const;
