import mongoose from "mongoose";

export class DiscordParticipantDto {
  eventId: mongoose.Types.ObjectId;
  userId: string;
  userTag: string;
  startDate: Date;
  endDate?: Date;
  durationInMinutes: number;
}
