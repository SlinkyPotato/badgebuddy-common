import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from '../transformer.util';
import { CommunityEventEntity } from '../community-events/community-event.entity';
import { DiscordUserEntity } from '../discord/discord-user.entity';

@Entity('poap_claims')
export class PoapClaimsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'qr_code',
    type: 'varchar',
  })
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

  @Column({
    name: 'claimed_on',
    type: 'varchar',
    length: 28,
    nullable: true,
    transformer: transformer.date,
  })
  claimedOn?: Date;

  @Column({
    name: 'claimed_by_discord_user_id',
    type: 'uuid',
    nullable: true,
  })
  claimedByDiscordUserId?: string;

  @Column({
    name: 'expires_on',
    type: 'varchar',
    length: 28,
    transformer: transformer.date,
  })
  expiresOn: Date;

  @ManyToOne(() => CommunityEventEntity, (communityEvent) => communityEvent.id)
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'id' })
  communityEvent: Relation<CommunityEventEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id)
  @JoinColumn({ name: 'claimed_by_discord_user_id', referencedColumnName: 'id' })
  claimedByDiscordUser?: Relation<DiscordUserEntity>;
}