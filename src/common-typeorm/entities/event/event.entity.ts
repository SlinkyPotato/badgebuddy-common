import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'title',
    nullable: false,
    type: 'varchar',
  })
  title: string;

  @Column({
    name: 'start_date',
    nullable: false,
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    nullable: false,
    type: 'datetime',
  })
  endDate: Date;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'is_active',
    nullable: false,
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @Column({
    name: 'platform',
    nullable: false,
    type: 'varchar',
  })
  platform: (typeof PlatformTypes)[keyof typeof PlatformTypes];
}

const PlatformTypes = {
  DISCORD: 'DISCORD',
  TWITTER: 'TWITTER',
  WEB3: 'WEB3',
  TELEGRAM: 'TELEGRAM',
  YOUTUBE: 'YOUTUBE',
  TWITCH: 'TWITCH',
  KICK: 'KICK',
  CLUBHOUSE: 'CLUBHOUSE',
  MEETUP: 'MEETUP',
  OTHER: 'OTHER',
} as const;
