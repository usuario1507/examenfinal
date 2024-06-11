import { Module } from '@nestjs/common';
import { AglproductosService } from './aglproductos.service';
import { AglproductosController } from './aglproductos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aglproducto } from './entities/aglproducto.entity';

@Module({
  controllers: [AglproductosController],
  providers: [AglproductosService],
  imports: [TypeOrmModule.forFeature([Aglproducto])],
  exports: [AglproductosService, TypeOrmModule],
})
export class AglproductosModule {}
