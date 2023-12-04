import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { DiscordGuildBotSettingsEntity } from './discord-guild-bot-settings.entity';
import { CommunityEventDiscordEntity } from '../community-events/community-event-discord.entity';

@Entity('discord_guilds')
export class DiscordGuildEntity {
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
  ownerSid: string;

  @Column({
    name: 'description',
    type: 'text',
  })
  description: string;

  @Column({
    name: 'nsfw_level',
    type: 'tinyint',
    nullable: false,
  })
  nsfwLevel: number;

  @OneToOne(() => DiscordGuildBotSettingsEntity, (botSettings) => botSettings.guild)
  botSettings: Relation<DiscordGuildBotSettingsEntity>;

  @OneToMany(() => CommunityEventDiscordEntity, (communityEvent) => communityEvent.guild)
  communityEvents: Relation<CommunityEventDiscordEntity[]>;
}
