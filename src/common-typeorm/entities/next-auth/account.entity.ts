import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from './transformer.util';
import { UserEntity } from './user.entity';

@Entity({ name: 'accounts' })
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'uuid',
    name: 'user_id',
  })
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
  refreshToken: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'access_token',
  })
  accessToken: string | null;

  @Column({
    nullable: true,
    type: 'varchar',
    name: 'expires_on',
    transformer: transformer.date,
  })
  expiresOn: Date | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'token_type',
  })
  tokenType: string | null;

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
  idToken: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'session_state',
  })
  sessionState: string | null;

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user: Relation<UserEntity>;
}
