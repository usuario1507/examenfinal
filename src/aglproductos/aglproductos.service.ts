/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAglproductoDto } from './dto/create-aglproducto.dto';
import { UpdateAglproductoDto } from './dto/update-aglproducto.dto';

@Injectable()
export class AglproductosService {
  create(createAglproductoDto: CreateAglproductoDto) {
    return 'This action adds a new aglproducto';
  }

  findAll() {
    return `This action returns all aglproductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aglproducto`;
  }

  update(id: number, updateAglproductoDto: UpdateAglproductoDto) {
    return `This action updates a #${id} aglproducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} aglproducto`;
  }
}
