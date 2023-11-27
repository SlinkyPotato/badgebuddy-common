import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from './transformer.util';
import { AccountEntity } from './account.entity';
import { SessionEntity } from './session.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'name',
  })
  name: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
    name: 'email',
  })
  email: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'email_verified',
    transformer: transformer.date,
  })
  emailVerified: Date | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'passwordHash',
  })
  passwordHash: string | null;

  @Column({
    type: 'text',
    nullable: true,
    name: 'image',
  })
  image: string | null;

  @OneToMany(() => SessionEntity, (session) => session.user.id)
  sessions!: Relation<SessionEntity[]>;

  @OneToMany(() => AccountEntity, (account) => account.user.id)
  accounts!: Relation<AccountEntity[]>;
}
