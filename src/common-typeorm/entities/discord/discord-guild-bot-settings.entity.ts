import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { SnowFlakeOption } from './discord.util';
import { DiscordGuildEntity } from './discord-guild.entity';

@Entity('discord_guilds_bot_settings')
export class DiscordGuildBotSettingsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'uuid',
    name: 'guild_id',
    unique: true,
  })
  guildId: string;

  @Column(SnowFlakeOption('private_channel_sid'))
  privateChannelSId: string;

  @Column(SnowFlakeOption('news_channel_sid'))
  newsChannelSId: string;

  @Column(SnowFlakeOption('poap_manager_role_sid'))
  poapManagerRoleSId: string;

  @OneToOne(() => DiscordGuildEntity, (guild) => guild.botSettings)
  @JoinColumn({ name: 'guild_id', referencedColumnName: 'id'})
  guild: Relation<DiscordGuildEntity>;
}