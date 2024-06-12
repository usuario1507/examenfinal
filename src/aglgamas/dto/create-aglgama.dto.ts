/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateAglgamaDto {
    @IsString()
    nombre: string;
  
    @IsString()
    descripcion: string;
  
    @IsString()
    foto: string;
}
