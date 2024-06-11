/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAglgamaDto } from './dto/create-aglgama.dto';
import { UpdateAglgamaDto } from './dto/update-aglgama.dto';

@Injectable()
export class AglgamasService {
  create(createAglgamaDto: CreateAglgamaDto) {
    return 'This action adds a new aglgama';
  }

  findAll() {
    return `This action returns all aglgamas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aglgama`;
  }

  update(id: number, updateAglgamaDto: UpdateAglgamaDto) {
    return `This action updates a #${id} aglgama`;
  }

  remove(id: number) {
    return `This action removes a #${id} aglgama`;
  }
}
