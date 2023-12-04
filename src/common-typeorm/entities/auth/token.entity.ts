import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { transformer } from '../transformer.util';
import { AccountEntity } from './account.entity';

const TokenType = ['access_token', 'refresh_token', 'id_token'] as const;
export type TokenType = typeof TokenType[number];

@Entity({ name: 'tokens' })
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'uuid',
    name: 'account_id',
  })
  accountId: string;

  @Column({
    type: 'text',
    name: 'token',
  })
  token: string;

  @Column({
    nullable: true,
    type: 'varchar',
    name: 'expires_on',
    transformer: transformer.date,
    length: 28,
  })
  expiresOn?: Date;

  @Column({
    type: 'enum',
    name: 'type',
    enum: [TokenType],
  })
  type: TokenType;

  @Column({
    type: 'text',
    nullable: true,
    name: 'scope',
  })
  scope?: string;

  @ManyToOne(() => AccountEntity, (account) => account.tokens)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account: Relation<AccountEntity>;
}
