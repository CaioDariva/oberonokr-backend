import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateFeelingService } from './create-feeling.service';

describe('CreateFeelingService', () => {
  let service: CreateFeelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFeelingService, PrismaService],
    }).compile();

    service = module.get<CreateFeelingService>(CreateFeelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
