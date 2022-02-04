import { Column, Entity, Generated, PrimaryGeneratedColumn ,OneToMany,CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { IsEmail,IsInt } from "class-validator";
import { ContactChannel } from '../../contact-channel/entities/contact-channel.entity'
import { ContactTag } from '../../contact-tag/entities/contact-tag.entity'

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uniqueIdentifier: string;

  @Column()
  firstName: string;

  @Column()
  middleName?: string;

  @Column()
  lastName: string;

  @Column()
  title: string;

  @Column()
  tenantId: number;

  @Column()
  primaryStreetAddress: string;

  @Column()
  secondaryStreetAddress: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => ContactChannel, (contactChannel) => contactChannel.contact)
  contactChannel: ContactChannel[];

  @OneToMany(() => ContactTag, (contactTag) => contactTag.contact)
  contactTag: ContactTag[];
}
