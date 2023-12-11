import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';
import { DiscordUserEntity } from './discord-user.entity';

@Entity('discord_bot_settings')
export class DiscordBotSettingsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column(SnowFlakeOption('guild_sid'))
  guildSId: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'icon',
    type: 'text',
    nullable: true,
  })
  icon?: string;

  @Column(SnowFlakeOption('owner_sid'))
  ownerSId: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column(SnowFlakeOption('private_channel_sid'))
  privateChannelSId: string;

  @Column({
    ...SnowFlakeOption('news_channel_sid'),
    nullable: true,
  })
  newsChannelSId?: string;

  @Column(SnowFlakeOption('poap_manager_role_sid'))
  poapManagerRoleSId: string;

  @OneToMany(() => CommunityEventDiscordEntity, (communityEvent) => communityEvent.botSettings, {
    cascade: ['insert', 'update', 'remove'],
  })
  communityEvents?: Relation<CommunityEventDiscordEntity[]>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.userSId, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'owner_sid' })
  discordOwner?: Relation<DiscordUserEntity>;
}
