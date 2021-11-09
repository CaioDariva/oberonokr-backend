import { Test, TestingModule } from '@nestjs/testing';
import { DeleteKrService } from './delete-kr.service';

describe('DeleteKrService', () => {
  let service: DeleteKrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteKrService],
    }).compile();

    service = module.get<DeleteKrService>(DeleteKrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
