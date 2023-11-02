import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { DiscordGuildEntity } from './discord-guild.entity';
import { DiscordUserEntity } from './discord-user.entity';
import { EventEntity } from './event.entity';

@Entity('events_discord_details')
export class EventDiscordDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'voice_channel_id',
    nullable: false,
    type: 'bigint',
    unsigned: true,
    unique: true,
  })
  voiceChannelId: bigint;

  @ManyToOne(() => DiscordGuildEntity, (discordGuild) => discordGuild.id)
  @JoinColumn({ name: 'discord_guild_fkid' })
  discordGuild: Relation<DiscordGuildEntity>;

  @ManyToOne(() => DiscordUserEntity, (participant) => participant.id, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'organizer_fkid' })
  organizerId: Relation<DiscordUserEntity>;

  @OneToOne(() => EventEntity, (event) => event.id, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'event_fkid' })
  event: Relation<EventEntity>;
}
