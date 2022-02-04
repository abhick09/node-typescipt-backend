import { Tenant } from "../../tenant/entities/tenant.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Platform } from "../channel.model";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    uniqueIdentifier: string;

    @Column({
        type: "enum",
        enum: Platform
    })
    @IsNotEmpty()
    platform: string;

    @ManyToOne(() => Tenant, tenant => tenant.channels, { nullable: false })
    tenant: Tenant;

}


