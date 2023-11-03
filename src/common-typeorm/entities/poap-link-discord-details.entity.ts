import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn, Relation,
} from 'typeorm';
import { DiscordUserEntity } from './discord-user.entity';
import { PoapLinkEntity } from './poap-link.entity';
import { EventDiscordDetailsEntity } from './event-discord-details.entity';

@Entity('poap_links_discord_details')
export class PoapLinkDiscordDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PoapLinkEntity, (poapLink) => poapLink.id, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'poap_link_fkid' })
  poapLink: Relation<PoapLinkEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id, {
    cascade: true,
  })
  @JoinColumn({ name: 'discord_user_fkid' })
  discordUser: Relation<DiscordUserEntity>;

  @OneToOne(() => EventDiscordDetailsEntity, (discordEvent) => discordEvent.id)
  @JoinColumn({ name: 'event_discord_details_fkid' })
  discordEvent: Relation<EventDiscordDetailsEntity>;
}
