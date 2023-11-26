import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { UserEntity } from './user.entity';
import { transformer } from './transformer.util';

@Entity({ name: 'sessions' })
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    type: 'varchar',
    nullable: false,
    name: 'session_token',
  })
  sessionToken: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'expires',
    transformer: transformer.date,
  })
  expires: Date;

  @Column({ type: 'uuid' })
  userId!: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions, {
    createForeignKeyConstraints: true,
  })
  user: Relation<UserEntity>;
}
