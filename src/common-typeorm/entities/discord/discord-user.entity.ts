import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';
import { PoapClaimDiscordEntity } from '../poaps/poap-claim-discord.entity';
import { UserEntity } from '../auth/user.entity';

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

  // Relations

  @ManyToOne(() => UserEntity, (authUser) => authUser.discordUser, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'auth_user_id', referencedColumnName: 'id' })
  authUser?: Relation<UserEntity>;

  @OneToMany(
    () => CommunityEventDiscordEntity,
    (communityEvent) => communityEvent.organizer,
    {
      cascade: ['insert', 'update'],
    },
  )
  communityEventsOrganized?: Relation<CommunityEventDiscordEntity[]>;

  @OneToMany(
    () => PoapClaimDiscordEntity,
    (poapClaims) => poapClaims.assignedDiscordUser,
  )
  poapClaims?: Relation<PoapClaimDiscordEntity[]>;
}
