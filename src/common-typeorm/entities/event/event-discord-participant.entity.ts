import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { DiscordUserEntity } from '../discord/discord-user.entity';
import { EventDiscordDetailsEntity } from './event-discord-details.entity';

@Entity('events_discord_participants')
export class EventDiscordParticipantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'startDate',
    nullable: false,
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    name: 'endDate',
    nullable: true,
    type: 'datetime',
  })
  endDate?: Date;

  @Column({
    name: 'duration_in_minutes',
    nullable: true,
    type: 'int',
  })
  durationInMinutes?: number;

  @ManyToOne(() => EventDiscordDetailsEntity, (event) => event.id, {})
  @JoinColumn({ name: 'event_discord_details_fkid' })
  discordEvent: Relation<EventDiscordDetailsEntity>;

  @ManyToOne(() => DiscordUserEntity, (discordUser) => discordUser.id, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'discord_user_fkid' })
  discordUser: Relation<DiscordUserEntity>;
}
