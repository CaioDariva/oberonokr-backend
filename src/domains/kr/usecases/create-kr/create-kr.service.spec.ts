import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateKrService } from './create-kr.service';

describe('CreateKrService', () => {
  let service: CreateKrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateKrService, PrismaService],
    }).compile();

    service = module.get<CreateKrService>(CreateKrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
