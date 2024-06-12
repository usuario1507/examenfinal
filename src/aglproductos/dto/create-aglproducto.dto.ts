/* eslint-disable prettier/prettier */
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateAglproductoDto {
    @IsNumber()
    @IsPositive()
    codigo: number;
  
    @IsString()
    nombre: string;
  
    @IsString()
    codgama: string;
  
    @IsString()
    proveedor: string;
  
    @IsString()
    descripcion: string;
  
    @IsNumber()
    @IsPositive()
    stock: number;
  
    @IsNumber()
    @IsPositive()
    pvp: number;
  
    @IsNumber()
    @IsPositive()
    pcoste: number;

    @IsString()
    foto: string;
}
