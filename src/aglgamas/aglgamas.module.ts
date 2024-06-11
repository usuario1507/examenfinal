import { Module } from '@nestjs/common';
import { AglgamasService } from './aglgamas.service';
import { AglgamasController } from './aglgamas.controller';
import { Aglgama } from './entities/aglgama.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AglgamasController],
  providers: [AglgamasService],
  imports: [TypeOrmModule.forFeature([Aglgama])],
  exports: [AglgamasService, TypeOrmModule],
})
export class AglgamasModule {}
