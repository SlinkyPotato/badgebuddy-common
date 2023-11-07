import { Column, Entity } from 'typeorm';

@Entity('discord_guilds')
export class DiscordGuildEntity {
  @Column({
    name: 'guild_id',
    unique: true,
    nullable: false,
    type: 'bigint',
    unsigned: true,
    primary: true,
  })
  id: bigint;

  @Column({
    name: 'name',
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'private_channel_id',
    nullable: false,
    type: 'bigint',
    unsigned: true,
    unique: true,
  })
  privateChannelId: bigint;

  @Column({
    name: 'news_channel_id',
    nullable: true,
    type: 'bigint',
    unsigned: true,
    unique: true,
  })
  newsChannelId?: string;

  @Column({
    name: 'poap_manager_role_id',
    nullable: false,
    type: 'bigint',
    unsigned: true,
    unique: true,
  })
  poapManagerRoleId: bigint;
}
