import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { UserEntity } from './user.entity';
import { TokenEntity } from './token.entity';

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
    name: 'provider',
    enum: ['google', 'discord'],
  })
  provider: 'google' | 'discord';

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'provider_account_id',
  })
  providerAccountId: string;

  @ManyToOne(() => UserEntity, (user) => user.accounts)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Relation<UserEntity>;

  @OneToMany(() => TokenEntity, (token) => token.accountId)
  tokens?: Relation<TokenEntity[]>;
}
