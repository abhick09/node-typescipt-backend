import {  IsEmail, IsInt, IsNotEmpty, IsUrl, Max, Min } from "class-validator";

export class createTenantDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly city: string;

    @IsInt()
    @IsNotEmpty()
    readonly postalCode?: number;

    @IsNotEmpty()
    readonly country: string;

    @IsNotEmpty()
    readonly serviceSector: string;

    @IsNotEmpty()
    readonly taxID: string;

    @IsUrl()
    readonly website: string;

    @IsNotEmpty()
    readonly contactNumber: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsEmail()
    readonly billingEmail: string;

    @IsUrl()
    readonly logoUrl?: string;

    @IsEmail()
    readonly technicalSupportEmail: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1000)
    @Max(9999)
    readonly foundedYear?: number;
}