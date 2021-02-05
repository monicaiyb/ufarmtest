import { PartialType } from '@nestjs/mapped-types';
import { CreateUrbanfarmerDto } from './create-urbanfarmer.dto';

export class UpdateUrbanfarmerDto extends PartialType(CreateUrbanfarmerDto) {}