import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { transformer } from './transformer.helper';

@Entity({ name: 'sessions' })
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  sessionToken!: string;

  @Column({ type: 'uuid' })
  userId!: string;

  @Column({ transformer: transformer.date })
  expires!: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user!: UserEntity;
}
