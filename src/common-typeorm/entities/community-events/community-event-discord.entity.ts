import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from '../discord/discord.util';
import { CommunityEventEntity } from './community-event.entity';
import { DiscordBotSettingsEntity } from '../discord/discord-bot-settings.entity';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { CommunityParticipantsDiscordEntity } from './community-participants-discord.entity';

@Entity('community_events_discord')
export class CommunityEventDiscordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'uuid',
    name: 'community_event_id'
  })
  communityEventId: string;

  @Column({
    type: 'uuid',
    name: 'guild_id'
  })
  guildId: string;

  @Column({
    type: 'uuid',
    name: 'organizer_id'
  })
  organizerId: string;

  @Column(SnowFlakeOption('voice_channel_sid'))
  voiceChannelSId: string;

  @OneToOne(() => CommunityEventEntity, (communityEvent) => communityEvent.discord)
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventEntity>;

  @ManyToOne(() => DiscordBotSettingsEntity, (discordGuild) => discordGuild.communityEvents)
  @JoinColumn({ name: 'guild_id', referencedColumnName: 'id' })
  guild: Relation<DiscordBotSettingsEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id)
  @JoinColumn({ name: 'organizer_id', referencedColumnName: 'id' })
  organizer: Relation<DiscordUserEntity>;

  @OneToMany(() => CommunityParticipantsDiscordEntity, (communityParticipantsDiscord) => communityParticipantsDiscord.id)
  participants: Relation<CommunityParticipantsDiscordEntity[]>;
}