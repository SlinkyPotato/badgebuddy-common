export class RedisDiscordParticipantDto {
  eventId: string;
  userId: string;
  userTag: string;
  startDate: string;
  endDate?: string;
  durationInMinutes: number;
}
