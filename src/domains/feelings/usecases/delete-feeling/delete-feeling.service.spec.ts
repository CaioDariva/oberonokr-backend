import { Test, TestingModule } from '@nestjs/testing';
import { DeleteFeelingService } from './delete-feeling.service';

describe('DeleteFeelingService', () => {
  let service: DeleteFeelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteFeelingService],
    }).compile();

    service = module.get<DeleteFeelingService>(DeleteFeelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
