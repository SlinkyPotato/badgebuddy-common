import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * @class DiscordGuild
 * @description Mongoose schema for Discord Guilds
 * @property {string} guildId - Discord ID of guild
 * @property {string} guildName - Name of guild
 * @property {string} privateChannelId - Discord ID of private channel
 * @property {string} newsChannelId - Discord ID of news channel
 * @property {string} poapManagerRoleId - Discord ID of POAP Manager role
 *
 */
@Schema({ collection: 'discordGuilds' })
export class DiscordGuild {
  @Prop({ required: true, unique: true })
  guildId: string;

  @Prop({ required: true })
  guildName: string;

  @Prop({ required: true })
  privateChannelId: string;

  @Prop({ required: false })
  newsChannelId: string;

  @Prop({ required: true })
  poapManagerRoleId: string;
}

export type DiscordGuildDocument = HydratedDocument<DiscordGuild>;

export const DiscordGuildSchema = SchemaFactory.createForClass(DiscordGuild);
