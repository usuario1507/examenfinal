/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity ('aglgama')
export class Aglgama {
    @PrimaryColumn()
    nombre: string;
  
    @Column('text')
    descripcion: string;
  
    @Column('text')
    imagen: string;
};

