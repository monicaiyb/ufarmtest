import { Test, TestingModule } from '@nestjs/testing';
import { UrbanfarmersService } from './urbanfarmers.service';

describe('UrbanfarmersService', () => {
  let service: UrbanfarmersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrbanfarmersService],
    }).compile();

    service = module.get<UrbanfarmersService>(UrbanfarmersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
