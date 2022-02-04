import { IsString, IsNotEmpty, isString} from "class-validator";

export class createContactTagDto {
    @IsNotEmpty()
    @IsString()
    readonly key: string;

    @IsNotEmpty()
    @IsString()
    readonly value: string;
}