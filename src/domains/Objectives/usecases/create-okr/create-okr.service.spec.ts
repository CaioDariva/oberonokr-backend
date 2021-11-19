import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateOkrService } from './create-okr.service';

describe('CreateOkrService', () => {
  let service: CreateOkrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateOkrService, PrismaService],
    }).compile();

    service = module.get<CreateOkrService>(CreateOkrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
