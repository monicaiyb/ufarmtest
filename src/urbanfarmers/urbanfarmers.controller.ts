import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { UrbanfarmersService } from './urbanfarmers.service';
import { CreateUrbanfarmerDto } from './dto/create-urbanfarmer.dto';

@Controller('urbanfarmers')
export class UrbanfarmersController {
  constructor(private urbanfarmersService: UrbanfarmersService) {}

  @Get()
  async showAllUsers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.urbanfarmersService.showAll(),
    };
  }

  @Post()
  async createUsers(@Body() data: CreateUrbanfarmerDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Farmerone added successfully',
      data: await this.urbanfarmersService.create(data),
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.urbanfarmersService.read(id),
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<CreateUrbanfarmerDto>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Farmerone updated successfully',
      data: await this.urbanfarmersService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.urbanfarmersService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Farmerone deleted successfully',
    };
  }
}