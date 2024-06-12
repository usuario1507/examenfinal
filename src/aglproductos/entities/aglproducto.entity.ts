/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('aglproducto')
export class Aglproducto {
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
  pcoste: string;

  @Column({ nullable: true })
  imagen: string;

  // @OneToMany(() => Cita, (cita) => cita.paciente, { eager: true })
  // citas?: Cita[];
}
