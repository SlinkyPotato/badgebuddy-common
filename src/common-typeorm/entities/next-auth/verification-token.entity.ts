import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { transformer } from './transformer.helper';

@Entity({ name: 'verification_tokens' })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  token!: string;

  @Column()
  identifier!: string;

  @Column({ transformer: transformer.date })
  expires!: string;
}
