import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { AccountEntity } from '../auth/account.entity';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';
import { CommunityParticipantsDiscordEntity } from '../community-events/community-participants-discord.entity';
import { PoapClaimsEntity } from '../poaps/poap-claims.entity';

@Entity('discord_users')
export class DiscordUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(SnowFlakeOption('user_sid'))
  userSId: string;

  @Column({
    name: 'auth_user_id',
    type: 'uuid',
    unique: true,
    nullable: true,
  })
  authUserId?: string;

  @Column({
    name: 'username',
    type: 'varchar',
  })
  username: string;

  @Column({
    name: 'discriminator',
    nullable: true,
    type: 'varchar',
    length: 4,
  })
  discriminator?: string;

  @Column({
    name: 'avatar',
    nullable: true,
    type: 'text',
  })
  avatar?: string;

  @OneToMany(() => AccountEntity, (account) => account.id)
  @JoinColumn({ name: 'auth_user_id', referencedColumnName: 'id' })
  account?: Relation<AccountEntity>;

  @OneToMany(() => CommunityEventDiscordEntity, (communityEvent) => communityEvent.organizer)
  organizedEvents?: Relation<CommunityEventDiscordEntity[]>;

  @OneToMany(() => CommunityParticipantsDiscordEntity, (communityParticipantsDiscord) => communityParticipantsDiscord.id)
  participatedEvents?: Relation<CommunityParticipantsDiscordEntity[]>;

  @OneToMany(() => PoapClaimsEntity, (poapClaims) => poapClaims.id)
  poapsClaimed?: Relation<PoapClaimsEntity[]>;
}
