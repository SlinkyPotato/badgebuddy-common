import { Column, Entity, OneToMany, Relation } from 'typeorm';
import { PoapLinkDiscordDetailsEntity } from '../poap/poap-link-discord-details.entity';

@Entity('discord_users')
export class DiscordUserEntity {
  @Column({
    name: 'user_id',
    unique: true,
    nullable: false,
    type: 'bigint',
    unsigned: true,
    primary: true,
  })
  id: bigint;

  @Column({
    name: 'tag',
    nullable: true,
    type: 'varchar',
  })
  tag?: string;

  @OneToMany(() => PoapLinkDiscordDetailsEntity, (poapLink) => poapLink.id)
  poapLinks: Relation<PoapLinkDiscordDetailsEntity>[];
}
