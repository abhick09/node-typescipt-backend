import { IsEnum, IsNotEmpty } from "class-validator";
import { Platform } from "../channel.model";

export class createChannelDto {

    @IsNotEmpty()
    readonly uniqueIdentifier: string;

    @IsNotEmpty()
    @IsEnum(Platform)
    readonly platform: Platform;
}

