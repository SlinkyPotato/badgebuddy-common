/**
 * Redis keys used with the cache manager.
 * The keys are also used in CACHE INTERCEPTORS.
 * @see https://docs.nestjs.com/techniques/caching#redis
 */

// Auth
export const AUTH_REQUEST = (clientId: string, authCode: string) => `auth:request:${clientId}:${authCode}` as const;
export const AUTH_REQUEST_GOOGLE = (sessionId: string) => `auth:request:google:${sessionId}` as const;
export const AUTH_REQUEST_DISCORD = (sessionId: string) => `auth:request:discord:${sessionId}` as const;
export const AUTH_EMAIL_VERIFY = (email: string) => `auth:verify:${email}` as const;
export const AUTH_REFRESH_TOKEN = (userId: string) => `auth:refreshToken:${userId}` as const;

// Discord Bot Settings
export const DISCORD_BOT_SETTINGS_GUILDSID = (guildSId: string) => `/discord/bot/settings?guildSId=${guildSId}` as const;
export const DISCORD_BOT_SETTINGS = (botSettingsId: string) => `/discord/bot/settings?botSettingsId=${botSettingsId}` as const;

// Discord Community Events
export const DISCORD_COMMUNITY_EVENTS_ACTIVE_ID = (id: string) => `/discord/community-events/active-by/id/${id}` as const;
export const DISCORD_COMMUNITY_EVENTS_ACTIVE_GUILD = (guildSId: string) => `/events/active?guildSId=${guildSId}` as const;
export const DISCORD_COMMUNITY_EVENTS_ACTIVE_VOICE_CHANNEL = (voiceChannelSId: string) => `/events/active?voiceChannelSId=${voiceChannelSId}` as const;
export const DISCORD_COMMUNITY_EVENTS_ACTIVE_ORGANIZER = (organizerSId: string) => `/events/active?organizerSId=${organizerSId}`;
export const DISCORD_COMMUNITY_EVENTS_ACTIVE_GUILD_ORGANIZER = ({organizerSId, guildSId}) => `/events/active?organizerSId=${organizerSId}&guildSId=${guildSId}`;

// Discord Processor
export const TRACKING_EVENTS_ACTIVE_VOICE_CHANNEL = (voiceChannelSId: string) => `tracking:events:active:voiceChannelSId:${voiceChannelSId}` as const;
