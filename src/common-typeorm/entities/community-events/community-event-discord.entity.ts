import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { SnowFlakeOption } from '../discord/discord.util';
import { CommunityEventEntity } from './community-event.entity';
import { DiscordBotSettingsEntity } from '../discord/discord-bot-settings.entity';
import { DiscordUserEntity } from '../discord/discord-user.entity';

@Entity('community_events_discord')
export class CommunityEventDiscordEntity {
  @PrimaryColumn({
    type: 'uuid',
    name: 'community_event_id',
  })
  communityEventId: string;

  @Column({
    type: 'uuid',
    name: 'bot_settings_id',
  })
  botSettingsId: string;

  @Column({
    type: 'uuid',
    name: 'organizer_id',
  })
  organizerId: string;

  @Column(SnowFlakeOption('voice_channel_sid'))
  @Index('voice_channel_sid_idx')
  voiceChannelSId: string;

  // Relations

  @OneToOne(
    () => CommunityEventEntity,
    (communityEvent) => communityEvent.discordCommunityEvent,
    { cascade: true, eager: true },
  )
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventEntity>;

  @ManyToOne(() => DiscordBotSettingsEntity)
  @JoinColumn({ name: 'bot_settings_id', referencedColumnName: 'id' })
  botSettings?: Relation<DiscordBotSettingsEntity>;

  @ManyToOne(
    () => DiscordUserEntity,
    (organizer) => organizer.communityEventsOrganized,
    {
      cascade: ['insert', 'update'],
    },
  )
  @JoinColumn({ name: 'organizer_id', referencedColumnName: 'id' })
  organizer?: Relation<DiscordUserEntity>;
}
