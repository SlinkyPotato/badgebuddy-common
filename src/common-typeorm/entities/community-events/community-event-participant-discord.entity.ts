import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { PoapClaimDiscordEntity } from '../poaps/poap-claim-discord.entity';

@Entity('community_events_participants_discord')
export class CommunityEventParticipantDiscordEntity {
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

  @ManyToOne(() => PoapClaimDiscordEntity)
  @JoinColumn({
    name: 'discord_user_sid',
    referencedColumnName: 'assigned_discord_user_sid',
  })
  discordPoapClaim?: Relation<PoapClaimDiscordEntity>;
}
