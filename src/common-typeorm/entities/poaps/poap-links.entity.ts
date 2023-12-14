import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation
} from 'typeorm';
import { CommunityEventEntity } from '../community-events/community-event.entity';
import { PoapDiscordClaimsEntity } from './poap-discord-claims.entity';

@Entity('poap_links')
export class PoapLinksEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'qr_code',
    type: 'varchar',
  })
  @Index('qr_code_idx')
  qrCode: string;

  @Column({
    name: 'claim_url',
    type: 'varchar',
  })
  claimUrl: string;

  @Column({
    name: 'community_event_id',
    type: 'uuid',
  })
  communityEventId: string;

  @ManyToOne(() => CommunityEventEntity, (communityEvent) => communityEvent.poapLinks, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventEntity>;

  @OneToOne(() => PoapDiscordClaimsEntity, (poapClaim) => poapClaim.poapLink)
  poapDiscordClaim?: Relation<PoapDiscordClaimsEntity>;
}
