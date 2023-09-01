export class CommunityEventDto {
  eventId: string;
  eventName: string;
  organizerId: string;
  voiceChannelId: string;
  guildId: string;
  startDate: Date;
  endDate: Date;
  isActive?: boolean | null;
  participants?: CommunityEventParticipant[] | null;
}

export type CommunityEventParticipant = {
  userId: string;
  duration: number;
  hasClaimed: boolean;
};
