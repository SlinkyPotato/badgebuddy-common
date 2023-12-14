import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Relation } from 'typeorm';
import { CommunityEventDiscordEntity } from './community-event-discord.entity';
import { DiscordUserEntity } from '../discord/discord-user.entity';

@Entity('community_participants_discord')
export class CommunityParticipantDiscordEntity {

  @PrimaryColumn({
    name: 'community_event_id',
    type: 'uuid'
  })
  communityEventId: string;

  @PrimaryColumn({
    name: 'discord_user_sid',
    type: 'bigint',
    unsigned: true,
  })
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

  // @ManyToOne(() => CommunityEventDiscordEntity, (discordCommunityEvent) => discordCommunityEvent.participants, {
  //   cascade: ['insert', 'update'],
  // })
  // @JoinColumn({ name: 'community_event_id', referencedColumnName: 'community_event_id' })
  // discordCommunityEvent: Relation<CommunityEventDiscordEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.userSId, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'discord_user_sid', referencedColumnName: 'id' })
  discordUser: Relation<DiscordUserEntity>;
}
