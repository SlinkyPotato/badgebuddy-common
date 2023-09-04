import mongoose from 'mongoose';
export class CommunityEventDto {
  eventId: mongoose.Types.ObjectId;
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
