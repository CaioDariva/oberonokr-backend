import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateOkrService } from './update-okr.service';

describe('UpdateOkrService', () => {
  let service: UpdateOkrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateOkrService, PrismaService],
    }).compile();

    service = module.get<UpdateOkrService>(UpdateOkrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
