import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Urbanfarmer } from 'src/urbanfarmers/entities/urbanfarmer.entity';
import { CreateUrbanfarmerDto } from './dto/create-urbanfarmer.dto';

@Injectable()
export class UrbanfarmersService {
  constructor(
    @InjectRepository(Urbanfarmer)
    private urbanfarmersRepository: Repository<Urbanfarmer>,
  ) {}

  async showAll() {
    return await this.urbanfarmersRepository.find();
  }

  async create(data: CreateUrbanfarmerDto) {
    const user = this.urbanfarmersRepository.create(data);
    await this.urbanfarmersRepository.save(data);
    return user;
  }

  async read(id: number) {
    return await this.urbanfarmersRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<CreateUrbanfarmerDto>) {
    await this.urbanfarmersRepository.update({ id }, data);
    return await this.urbanfarmersRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.urbanfarmersRepository.delete({ id });
    return { deleted: true };
  }
}