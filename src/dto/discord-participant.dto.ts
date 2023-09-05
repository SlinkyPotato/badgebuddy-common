export class DiscordParticipantDto {
  eventId: string;
  userId: string;
  userTag: string;
  startDate: Date;
  endDate?: Date;
  durationInMinutes: number;
}
