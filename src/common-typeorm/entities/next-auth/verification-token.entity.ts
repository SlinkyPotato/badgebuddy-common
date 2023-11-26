import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from './transformer.util';
import { UserEntity } from './user.entity';

@Entity({ name: 'verification_tokens' })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'token',
  })
  token: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'expires',
    transformer: transformer.date,
  })
  expires: Date;

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user: Relation<UserEntity>;
}
