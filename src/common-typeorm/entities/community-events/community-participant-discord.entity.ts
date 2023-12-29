import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { PoapDiscordClaimsEntity } from '../poaps/poap-discord-claims.entity';

@Entity('community_participants_discord')
export class CommunityParticipantDiscordEntity {
  @PrimaryColumn({
    name: 'community_event_id',
    type: 'uuid',
  })
  communityEventId: string;

  @Column({
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

  // in seconds
  @Column({
    name: 'participation_length',
    nullable: true,
    type: 'int',
    unsigned: true,
  })
  participationLength?: number;

  @ManyToOne(() => DiscordUserEntity, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'discord_user_sid', referencedColumnName: 'user_sid' })
  discordUser?: Relation<DiscordUserEntity>;

  @ManyToOne(() => PoapDiscordClaimsEntity)
  @JoinColumn({
    name: 'discord_user_sid',
    referencedColumnName: 'assigned_discord_user_sid',
  })
  poap?: Relation<PoapDiscordClaimsEntity>;
}
