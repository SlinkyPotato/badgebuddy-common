export class CommunityEventDto {
  eventId: string;
  eventName: string;
  organizerId: string;
  voiceChannelId: string;
  guildId: string;
  startDate: string;
  endDate: string;
  isActive?: boolean | null;
}
