import { AccountEntity } from './account.entity';
import { SessionEntity } from './session.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from 'typeorm';

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
    type: 'datetime',
    nullable: true,
    name: 'email_verified',
  })
  emailVerified: Date | null;

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
