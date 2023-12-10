export class DiscordParticipantRedisDto {
  communityEventId: string;
  discordUserSId: string;
  startDate: string;
  endDate?: string;
  durationInSeconds: number;
}
