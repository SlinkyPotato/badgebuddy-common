import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { CommunityEventDiscordEntity } from './community-event-discord.entity';

@Entity('community_events')
export class CommunityEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    type: 'varchar',
  })
  title: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'start_date',
    nullable: false,
    type: 'datetime',
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    type: 'datetime',
  })
  endDate: Date;

  @Column({
    name: 'image',
    type: 'text',
    nullable: true,
  })
  image?: string;

  @Column({
    name: 'website',
    type: 'text',
    nullable: true,
  })
  website?: string;

  /**
   * @see https://documentation.poap.tech/reference/geteventsid
   */
  @Column({
    name: 'poap_event_id',
    type: 'int',
    nullable: true,
  })
  poapEventId?: number;

  @Column({
    name: 'disbanded_date',
    type: 'datetime',
    nullable: true,
  })
  disbandedDate?: Date; // set when event participants have been processed

  // Relations

  @OneToOne(
    () => CommunityEventDiscordEntity,
    (discordCommunityEvent) => discordCommunityEvent.communityEvent,
  )
  discordCommunityEvent?: Relation<CommunityEventDiscordEntity>;
}
