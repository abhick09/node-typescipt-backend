import { IsEnum, IsNotEmpty} from "class-validator";
import { Platform } from "../contact-channel.model";

export class createContactChannelDto {
    @IsNotEmpty()
    @IsEnum(Platform)
    readonly platform?: Platform;
}