import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { transformer } from './transformer.util';

@Entity({ name: 'verification_tokens' })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'identifier',
  })
  identifier: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'token',
  })
  token: string;

  @Column({
    type: 'datetime',
    nullable: false,
    name: 'expires',
    transformer: transformer.date,
  })
  expires: Date;
}
