import { Test, TestingModule } from '@nestjs/testing';
import { GetKrService } from './get-kr.service';

describe('GetKrService', () => {
  let service: GetKrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetKrService],
    }).compile();

    service = module.get<GetKrService>(GetKrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
