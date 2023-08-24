import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'discordParticipants' })
export class DiscordParticipant {
  @Prop({ required: true, unique: true })
  guildId: string;

  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: false })
  userTag: string;

  @Prop({ required: true, unique: true })
  voiceChannelId: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: false })
  durationInMinutes: number;
}

export type DiscordParticipantDocument = HydratedDocument<DiscordParticipant>;

export const DiscordParticipantSchema =
  SchemaFactory.createForClass(DiscordParticipant);
