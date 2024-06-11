/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('aglproducto')
export class Paciente {
  @PrimaryColumn()
  codigo: number;

  @Column('text')
  nombre: string;

  @Column('text')
  codgama: string;

  @Column('text')
  proveedor: string;

  @Column('text')
  descripcion: string;

  @Column('numeric')
  stock: number;

  @Column('numeric')
  pvp: number;

  @Column('numeric')
  pcoste: number;

  @Column({ nullable: true })
  imagen: string;
}