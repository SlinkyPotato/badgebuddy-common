import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'name',
  })
  name?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'datetime',
    nullable: true,
    name: 'email_verified_on',
  })
  emailVerifiedOn?: Date;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'password_hash',
  })
  passwordHash?: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'image',
  })
  image?: string;

  @OneToMany(() => AccountEntity, (account) => account.user.id)
  accounts?: Relation<AccountEntity[]>;
}
