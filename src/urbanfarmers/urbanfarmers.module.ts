import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Urbanfarmer } from 'src/urbanfarmers/entities/urbanfarmer.entity';
import { UrbanfarmersService } from './urbanfarmers.service';
import { UrbanfarmersController } from './urbanfarmers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Urbanfarmer])],
  controllers: [UrbanfarmersController],
  providers: [UrbanfarmersService]
})
export class UrbanfarmersModule {}