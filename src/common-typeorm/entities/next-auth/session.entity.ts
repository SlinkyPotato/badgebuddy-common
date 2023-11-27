import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from './transformer.util';
import { UserEntity } from './user.entity';

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
    name: 'expires_on',
    transformer: transformer.date,
  })
  expiresOn: Date;

  @Column({
    type: 'uuid',
    name: 'user_id',
    
  })
  userId!: string;

  @ManyToOne(() => UserEntity, (user) => user.sessions, {
    createForeignKeyConstraints: true,
  })
  user: Relation<UserEntity>;
}
