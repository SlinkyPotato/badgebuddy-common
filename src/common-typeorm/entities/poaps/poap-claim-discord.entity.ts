import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { PoapClaimEntity } from './poap-claim.entity';
import { SnowFlakeOption } from '../discord/discord.util';
import { CommunityEventParticipantDiscordEntity } from '../community-events/community-event-participant-discord.entity';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';

@Entity('poap_claims_discord')
export class PoapClaimDiscordEntity {
  @PrimaryColumn({
    name: 'poap_claim_id',
    type: 'uuid',
  })
  poapClaimId: string;

  @Column(SnowFlakeOption('assigned_discord_user_sid'))
  assignedDiscordUserSId: string;

  @Column({
    name: 'assigned_discord_user_id',
    type: 'uuid',
    nullable: true,
  })
  assignedDiscordUserId?: string;

  @Column({
    name: 'assigned_on',
    type: 'datetime',
    nullable: true,
  })
  assignedOn?: Date;

  @Column({
    name: 'claimed_on',
    type: 'datetime',
    nullable: true,
  })
  claimedOn?: Date;

  @Column({
    name: 'expires_on',
    type: 'datetime',
    nullable: true,
  })
  expiresOn?: Date;

  // Relations

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.poapClaims, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({
    name: 'assigned_discord_user_id',
    referencedColumnName: 'id',
  })
  assignedDiscordUser?: Relation<DiscordUserEntity>;

  @OneToOne(() => PoapClaimEntity, (poapClaim) => poapClaim.discordPoapClaim, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'poap_claim_id', referencedColumnName: 'id' })
  poapClaim: Relation<PoapClaimEntity>;

  @OneToOne(() => PoapClaimDiscordEntity)
  discordCommunityEventParticipant?: Relation<CommunityEventParticipantDiscordEntity>;
}
