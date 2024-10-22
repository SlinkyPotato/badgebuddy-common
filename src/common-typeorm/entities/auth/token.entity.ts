import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { AccountEntity } from './account.entity';

const TokenType = ['access_token', 'refresh_token', 'id_token'] as const;
export type TokenType = (typeof TokenType)[number];

@Entity({ name: 'tokens' })
export class TokenEntity {
  @PrimaryColumn({
    type: 'uuid',
    name: 'account_id',
  })
  accountId: string;

  @PrimaryColumn({
    type: 'enum',
    name: 'type',
    enum: [TokenType],
  })
  type: TokenType;

  @Column({
    type: 'text',
    name: 'token',
  })
  token: string;

  @Column({
    nullable: true,
    type: 'datetime',
    name: 'expires_on',
  })
  expiresOn?: Date;

  @Column({
    type: 'text',
    nullable: true,
    name: 'scope',
  })
  scope?: string;

  @ManyToOne(() => AccountEntity, (account) => account.tokens)
  @JoinColumn({ name: 'account_id', referencedColumnName: 'id' })
  account?: Relation<AccountEntity>;
}
