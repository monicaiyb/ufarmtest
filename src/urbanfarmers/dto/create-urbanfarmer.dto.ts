import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateUrbanfarmerDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  ward: string;

  @IsString()
  dateOfRegistration: string;

  @IsString()
  gender: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  activiies: string;

  @IsString()
  nin: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  direction: string;

  @IsString()
  residenceType: string;

  @IsString()
  username: string;
}
