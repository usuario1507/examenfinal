import { PartialType } from '@nestjs/mapped-types';
import { CreateAglgamaDto } from './create-aglgama.dto';

export class UpdateAglgamaDto extends PartialType(CreateAglgamaDto) {}
