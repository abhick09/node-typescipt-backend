import { Column, Entity, Generated, PrimaryGeneratedColumn ,OneToMany,CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { IsEmail,IsInt,Max,IsUrl,Min} from "class-validator";
import { Contact } from '../../contact/entities/contact.entity'

@Entity()
export class ContactTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  value: string;

  @ManyToOne((type) => Contact, (contact) => contact.contactTag)
  contact: Contact;
}
