import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AglgamasService } from './aglgamas.service';
import { CreateAglgamaDto } from './dto/create-aglgama.dto';
import { UpdateAglgamaDto } from './dto/update-aglgama.dto';

@Controller('aglgamas')
export class AglgamasController {
  constructor(private readonly aglgamasService: AglgamasService) {}

  @Post()
  create(@Body() createAglgamaDto: CreateAglgamaDto) {
    return this.aglgamasService.create(createAglgamaDto);
  }

  @Get()
  findAll() {
    return this.aglgamasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aglgamasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAglgamaDto: UpdateAglgamaDto) {
    return this.aglgamasService.update(+id, updateAglgamaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aglgamasService.remove(+id);
  }
}
