import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { CommunityEventEntity } from '../community-events/community-event.entity';
import { PoapClaimDiscordEntity } from './poap-claim-discord.entity';

@Entity('poap_claims')
export class PoapClaimEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'qr_code',
    type: 'varchar',
    unique: true,
  })
  @Index('qr_code_idx')
  qrCode: string;

  @Column({
    name: 'claim_url',
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  claimUrl: string;

  @Column({
    name: 'community_event_id',
    type: 'uuid',
  })
  communityEventId: string;

  @ManyToOne(() => CommunityEventEntity, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventEntity>;

  @OneToOne(() => PoapClaimDiscordEntity, (poapClaim) => poapClaim.poapClaim)
  discordPoapClaim?: Relation<PoapClaimDiscordEntity>;
}
