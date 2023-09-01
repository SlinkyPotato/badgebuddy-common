import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

/**
 * @class CommunityEvent
 * @description Mongoose schema for Community Events by manual tracking only
 * @property {string} eventName - Name of event
 * @property {string} organizerId - Discord ID of organizer
 * @property {string} voiceChannelId - Discord ID of voice channel
 * @property {string} guildId - Discord ID of guild
 * @property {Date} startDate - Start date of event
 * @property {Date} endDate - End date of event
 * @property {boolean} isActive - true if active, false otherwise
 * @property {CommunityEventParticipant[]} participants - Array of CommunityEventParticipants
 *
 */
@Schema({ collection: 'communityEvents' })
export class CommunityEvent {
  @Prop({ required: true })
  eventName: string;

  @Prop({ required: true })
  organizerId: string;

  @Prop({ required: true })
  voiceChannelId: string;

  @Prop({ required: true })
  guildId: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true, default: true })
  isActive: boolean;

  @Prop({
    raw: raw({
      userId: String,
      duration: Number,
      hasClaimed: Boolean,
    }),
    required: false,
  })
  participants: CommunityEventParticipant[];
}

type CommunityEventParticipant = {
  userId: string;
  duration: number;
  hasClaimed: boolean;
};

export type CommunityEventDocument = HydratedDocument<CommunityEvent>;

export const CommunityEventSchema =
  SchemaFactory.createForClass(CommunityEvent);
