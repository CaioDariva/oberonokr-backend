import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFeelingService } from './find-all-feeling.service';

describe('FindAllFeelingService', () => {
  let service: FindAllFeelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFeelingService, PrismaService],
    }).compile();

    service = module.get<FindAllFeelingService>(FindAllFeelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
