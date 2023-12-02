import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from './transformer.util';
import { AccountEntity } from './account.entity';

@Entity({ name: 'accounts' })
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'uuid',
    name: 'account_id',
  })
  accountId: string;

  @Column({
    type: 'varchar',
    name: 'token',
  })
  token: string;

  @Column({
    nullable: true,
    type: 'varchar',
    name: 'expires_on',
    transformer: transformer.date,
  })
  expiresOn?: Date;

  @Column({
    type: 'varchar',
    name: 'token_type',
    enum: ['access_token', 'refresh_token', 'id_token'],
  })
  tokenType: 'access_token' | 'refresh_token' | 'id_token';

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'scope',
  })
  scope?: string;

  @ManyToOne(() => AccountEntity, (account) => account.tokens)
  accounts: Relation<AccountEntity>;
}
