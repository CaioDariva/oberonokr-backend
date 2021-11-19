import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllOkrService } from './find-all-okr.service';

describe('FindAllOkrService', () => {
  let service: FindAllOkrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllOkrService, PrismaService],
    }).compile();

    service = module.get<FindAllOkrService>(FindAllOkrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
