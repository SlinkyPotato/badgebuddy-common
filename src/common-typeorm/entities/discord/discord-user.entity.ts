import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { AccountEntity } from '../auth/account.entity';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';
import { CommunityParticipantDiscordEntity } from '../community-events/community-participant-discord.entity';
import { PoapDiscordClaimsEntity } from '../poaps/poap-discord-claims.entity';
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

  @ManyToOne(() => UserEntity, (authUser) => authUser.discordUser, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'auth_user_id', referencedColumnName: 'id' })
  authUser?: Relation<UserEntity[]>;

  @OneToMany(() => CommunityEventDiscordEntity, (communityEvent) => communityEvent.organizer, {
    cascade: ['insert', 'update'],
  })
  organizedEvents?: Relation<CommunityEventDiscordEntity[]>;

  @OneToMany(() => CommunityParticipantDiscordEntity, (communityParticipantsDiscord) => communityParticipantsDiscord.discordUser, {
    cascade: ['insert', 'update'],
  })
  participatedEvents?: Relation<CommunityParticipantDiscordEntity[]>;

  // @OneToMany(() => PoapDiscordClaimsEntity, (poapClaims) => poapClaims.assignedToDiscordUser, {
  //   cascade: ['insert', 'update'],
  // })
  // discordPoapsClaimed?: Relation<PoapDiscordClaimsEntity[]>;
}
