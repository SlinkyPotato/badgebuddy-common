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
  communityEvent: CommunityEvent;

  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: false })
  userTag: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: false })
  endDate: Date;

  @Prop({ required: true, default: 0 })
  durationInMinutes: number;
}

export type DiscordParticipantDocument = HydratedDocument<DiscordParticipant>;

export const DiscordParticipantSchema =
  SchemaFactory.createForClass(DiscordParticipant);
