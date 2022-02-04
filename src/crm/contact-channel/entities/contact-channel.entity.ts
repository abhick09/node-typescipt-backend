import { IsNotEmpty } from 'class-validator';
import { Column, Entity, Generated, PrimaryGeneratedColumn ,OneToMany,CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Contact } from '../../contact/entities/contact.entity'
import { Platform } from '../contact-channel.model'

@Entity()
export class ContactChannel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uniqueIdentifier: string;

  @Column({
    type: 'enum',
    enum: Platform,
  })
  @IsNotEmpty()
  platform?: string;

  @ManyToOne(() => Contact, (contact) => contact.contactChannel)
  contact: Contact;
}


