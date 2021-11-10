import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFeelingService } from './update-feeling.service';

describe('UpdateFeelingService', () => {
  let service: UpdateFeelingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFeelingService, PrismaService],
    }).compile();

    service = module.get<UpdateFeelingService>(UpdateFeelingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
