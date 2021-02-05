export class CreateProductDto {}

import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateUrbanfarmerDto {
  @IsNumber()
  id: number;

  @IsString()
  pname: string;

  @IsString()
  ward: string;

  @IsString()
  dateOfUpload: string;

  @IsString()
  farmername: string;

  @IsString()
  image: string;
}