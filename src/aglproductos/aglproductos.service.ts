/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAglproductoDto } from './dto/create-aglproducto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { UpdateAglproductoDto } from './dto/update-aglproducto.dto';

@Injectable()
export class AglproductosService {
  constructor(
    @InjectRepository(producto)
    private readonly productosRepository: Repository<Productos>,
  ) {}
    async create(createAglproductoDto: CreateAglproductoDto) {
      try {
        const medico = this.productosRepository.create(createAglproductoDto);
        console.log(producto);
        await this.productosRepository.save(producto);
        return {
          status: 200,
          data: producto,
          msg: 'Producto insertado correctamente',
        };
      } catch (error) {
        return new InternalServerErrorException(
          'No se puede insertar este producto',
        );
      }
    }
  }

  // findAll() {
  //  return `This action returns all aglproductos`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} aglproducto`;
  // }

  //update(id: number, updateAglproductoDto: UpdateAglproductoDto) {
  //  return `This action updates a #${id} aglproducto`;
  // }

  // remove(id: number) {
  //  return `This action removes a #${id} aglproducto`;
  // }
}
