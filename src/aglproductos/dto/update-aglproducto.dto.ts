import { PartialType } from '@nestjs/mapped-types';
import { CreateAglproductoDto } from './create-aglproducto.dto';

export class UpdateAglproductoDto extends PartialType(CreateAglproductoDto) {}
