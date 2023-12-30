import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('community_events_participants_discord')
export class CommunityEventParticipantDiscordEntity {
  @PrimaryColumn({
    name: 'community_event_id',
    type: 'uuid',
  })
  communityEventId: string;

  @PrimaryColumn({
    name: 'discord_user_sid',
    type: 'bigint',
    unsigned: true,
  })
  discordUserSId: string;

  @Column({
    name: 'start_date',
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    nullable: true,
    type: 'datetime',
  })
  endDate?: Date;

  // in seconds
  @Column({
    name: 'participation_length',
    nullable: true,
    type: 'int',
    unsigned: true,
  })
  participationLength?: number;

  // Relations
}
