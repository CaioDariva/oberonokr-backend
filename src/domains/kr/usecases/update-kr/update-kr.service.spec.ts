import { Test, TestingModule } from '@nestjs/testing';
import { UpdateKrService } from './update-kr.service';

describe('UpdateKrService', () => {
  let service: UpdateKrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateKrService],
    }).compile();

    service = module.get<UpdateKrService>(UpdateKrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
