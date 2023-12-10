export class DiscordParticipantRedisDto {
  communityEventId: string;
  discordUserSId: string;
  discordUserTag: string;
  startDate: string;
  endDate?: string;
  durationInSeconds: number;
}
