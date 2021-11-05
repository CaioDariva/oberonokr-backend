import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOkrService } from './delete-okr.service';

describe('DeleteOkrService', () => {
  let service: DeleteOkrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteOkrService, PrismaService],
    }).compile();

    service = module.get<DeleteOkrService>(DeleteOkrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
