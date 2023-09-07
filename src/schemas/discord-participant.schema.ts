import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { CommunityEvent } from './community-event.schema';

@Schema({ collection: 'discordParticipants' })
export class DiscordParticipant {
  @Prop({
    ref: 'CommunityEvent',
    type: mongoose.Schema.Types.ObjectId,
    unique: false,
  })
  communityEvent: CommunityEvent | mongoose.Types.ObjectId;

  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true })
  userTag: string;

  @Prop({ required: true, type: Date })
  startDate: Date;

  @Prop({ required: false, type: Date })
  endDate?: Date;

  @Prop({ required: true, default: 0.0, type: Number })
  durationInMinutes: number;
}

export type DiscordParticipantDocument = HydratedDocument<DiscordParticipant>;

export const DiscordParticipantSchema =
  SchemaFactory.createForClass(DiscordParticipant);
