export class CommunityEventDto {
  id: string;
  eventName: string;
  organizerSId: string;
  voiceChannelSId: string;
  guildSId: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
}
