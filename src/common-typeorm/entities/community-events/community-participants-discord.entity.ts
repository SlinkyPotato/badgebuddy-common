import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from '../discord/discord.util';
import { CommunityEventDiscordEntity } from './community-event-discord.entity';
import { DiscordUserEntity } from '../discord/discord-user.entity';

@Entity('community_participants_discord')
export class CommunityParticipantsDiscordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'community_event_id',
    type: 'uuid'
  })
  communityEventId: string;

  @Column(SnowFlakeOption('discord_user_sid'))
  discordUserSId: string;

  @Column({
    name: 'start_date',
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    nullable: true,
    type: 'datetime',
  })
  endDate?: Date;

  /**
   * Participation length in seconds
   */
  @Column({
    name: 'participation_length',
    nullable: true,
    type: 'int',
    unsigned: true,
  })
  participationLength?: number;

  @ManyToOne(() => CommunityEventDiscordEntity, (communityEventDiscord) => communityEventDiscord.id)
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventDiscordEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'discord_user_sid', referencedColumnName: 'id' })
  discordUser: Relation<DiscordUserEntity>;
}
