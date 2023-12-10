export class DiscordParticipantRedisDto {
  eventId: string;
  userId: string;
  userTag: string;
  startDate: string;
  endDate?: string;
  durationInSeconds: number;
}
