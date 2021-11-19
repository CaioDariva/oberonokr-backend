import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOneOkrService } from './find-one-okr.service';

describe('FindOneOkrService', () => {
  let service: FindOneOkrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneOkrService, PrismaService],
    }).compile();

    service = module.get<FindOneOkrService>(FindOneOkrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
