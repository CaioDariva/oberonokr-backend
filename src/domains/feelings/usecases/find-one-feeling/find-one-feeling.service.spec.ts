import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOneFeelingService } from './find-one-feeling.service';

describe('FindOneFeelingService', () => {
  let service: FindOneFeelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneFeelingService, PrismaService],
    }).compile();

    service = module.get<FindOneFeelingService>(FindOneFeelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
