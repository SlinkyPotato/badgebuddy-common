import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'accounts' })
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'type',
  })
  type: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'provider',
  })
  provider: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'provider_account_id',
  })
  providerAccountId: string;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'refresh_token',
  })
  refresh_token: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'access_token',
  })
  access_token: string | null;

  @Column({
    nullable: true,
    type: 'bigint',
    name: 'expires_at',
  })
  expires_at: bigint | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'token_type',
  })
  token_type: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'scope',
  })
  scope: string | null;

  @Column({
    type: 'text',
    nullable: true,
    name: 'id_token',
  })
  id_token: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'session_state',
  })
  session_state: string | null;

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user: Relation<UserEntity>;
}
