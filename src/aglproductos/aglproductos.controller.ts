/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AglproductosService } from './aglproductos.service';
import { CreateAglproductoDto } from './dto/create-aglproducto.dto';
// import { UpdateAglproductoDto } from './dto/update-aglproducto.dto';

@Controller('aglproductos')
export class AglproductosController {
  constructor(private readonly aglproductosService: AglproductosService) {}

  @Post()
  create(@Body() createAglproductoDto: CreateAglproductoDto) {
    console.log('producto = ', CreateAglproductoDto);
    return this.aglproductosService.create(createAglproductoDto);
  }

  // @Get()
  // findAll() {
  //   return this.aglproductosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //  return this.aglproductosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAglproductoDto: UpdateAglproductoDto) {
  //  return this.aglproductosService.update(+id, updateAglproductoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aglproductosService.remove(+id);
  }
}
