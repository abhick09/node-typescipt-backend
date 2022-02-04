import { IsEmail, IsNotEmpty, Length, IsString } from "class-validator";

export class createContactDto {
    @IsNotEmpty()
    @IsString()
    @Length(2,64)
    readonly firstName: string;

    readonly middleName?: string;

    @IsNotEmpty()
    @IsString()
    @Length(2,64)
    readonly lastName: string;

    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly tenantId: number;

    @IsNotEmpty()
    @IsString()
    readonly primaryStreetAddress: string;

    @IsString()
    readonly secondaryStreetAddress: string;

    @IsNotEmpty()
    @IsString()
    readonly city: string;

    @IsNotEmpty()
    readonly postalCode: string;

    @IsNotEmpty()
    @IsString()
    readonly country: string;

    @IsNotEmpty()
    @IsString()
    @Length(3,64)
    readonly phone: string;

    @IsEmail()
    readonly email: string;
}