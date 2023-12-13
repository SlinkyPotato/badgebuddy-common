import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, Relation } from 'typeorm';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { PoapLinksEntity } from './poap-links.entity';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';

@Entity('poap_discord_claims')
export class PoapDiscordClaimsEntity {

  @PrimaryColumn({
    name: 'poap_link_id',
    type: 'uuid',
  })
  poapLinkId: string;

  @Column({
    name: 'assigned_to_discord_user_id',
    type: 'uuid',
  })
  assignedToDiscordUserId: string;

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
  })
  expiresOn: Date;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id)
  @JoinColumn({ name: 'assigned_to_discord_user_id', referencedColumnName: 'id' })
  assignedToDiscordUser: Relation<DiscordUserEntity>;

  @OneToOne(() => PoapLinksEntity, (poapLink) => poapLink.id, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'poap_link_id', referencedColumnName: 'id' })
  poapLink: Relation<PoapLinksEntity>;

  @ManyToOne(() => CommunityEventDiscordEntity, (communityEvent) => communityEvent.communityEventId)
  @JoinColumn({ name: 'community_event_id', referencedColumnName: 'community_event_id' })
  discordCommunityEvent: Relation<CommunityEventDiscordEntity>;
}
