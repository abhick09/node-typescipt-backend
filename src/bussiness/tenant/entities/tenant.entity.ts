import { Channel } from '../../channel/entities/channel.entity';
import { Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined, IsEmail, IsInt, IsUrl, Max, Min } from "class-validator";

@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    uuid: string;

    @Column()
    @IsDefined()
    name: string;

    @Column()
    @IsDefined()
    address: string;

    @Column()
    @IsDefined()
    city: string;

    @Column()
    @IsInt()
    @IsDefined()
    postalCode?: number;

    @Column()
    @IsDefined()
    country: string;

    @Column()
    serviceSector: string;

    @Column()
    @IsDefined()
    taxID: string;

    @Column()
    @IsUrl()
    website: string;

    @Column()
    @IsDefined()
    contactNumber: string;

    @Column()
    @IsEmail()
    @IsDefined()
    email: string;

    @Column()
    @IsEmail()
    billingEmail: string;

    @Column()
    @IsUrl()
    logoUrl?: string;

    @Column()
    @IsEmail()
    technicalSupportEmail: string;

    @Column()
    @IsDefined()
    @IsInt()
    @Min(1000)
    @Max(9999)
    foundedYear?: number;

    @Column()
    @CreateDateColumn()
    createdDate: Date;

    @Column()
    @CreateDateColumn()
    updatedDate: Date;

    @OneToMany(type => Channel, channel => channel.tenant)
    channels: Channel[];
}