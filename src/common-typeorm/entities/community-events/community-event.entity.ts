import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from '../transformer.util';
import { CommunityEventDiscordEntity } from './community-event-discord.entity';
import { PoapClaimsEntity } from '../poaps/poap-claims.entity';

@Entity('community_events')
export class CommunityEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
  })
  title: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'start_date',
    nullable: false,
    type: 'datetime',
    transformer: transformer.date,
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    type: 'datetime',
    transformer: transformer.date,
  })
  endDate: Date;

  @Column({
    name: 'image',
    type: 'text',
    nullable: true,
  })
  image?: string;

  @Column({
    name: 'website',
    type: 'text',
    nullable: true,
  })
  website?: string;

  /**
   * @see https://documentation.poap.tech/reference/geteventsid
   */
  @Column({
    name: 'poap_event_id',
    type: 'int',
    nullable: true,
  })
  poapEventId?: number;

  @OneToOne(() => CommunityEventDiscordEntity, (discord) => discord.communityEvent, {
    cascade: true,
  })
  discord?: Relation<CommunityEventDiscordEntity>;

  @OneToMany(() => PoapClaimsEntity, (poapClaim) => poapClaim.communityEvent, {
    cascade: true,
  })
  poapClaims?: Relation<PoapClaimsEntity[]>;
}