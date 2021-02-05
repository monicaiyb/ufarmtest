import { Test, TestingModule } from '@nestjs/testing';
import { UrbanfarmersController } from './urbanfarmers.controller';
import { UrbanfarmersService } from './urbanfarmers.service';

describe('UrbanfarmersController', () => {
  let controller: UrbanfarmersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrbanfarmersController],
      providers: [UrbanfarmersService],
    }).compile();

    controller = module.get<UrbanfarmersController>(UrbanfarmersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
