export class RedisCommunityEventDto {
  id: string;
  title: string;
  organizerSId: string;
  voiceChannelSId: string;
  guildSId: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
}
