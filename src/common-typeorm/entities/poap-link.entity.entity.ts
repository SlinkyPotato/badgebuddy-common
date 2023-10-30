import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('poap_links')
export class PoapLinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'url',
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  url: string;

  @Column({
    name: 'expires_at',
    nullable: false,
    type: 'datetime',
  })
  expiresAt: Date;
}
