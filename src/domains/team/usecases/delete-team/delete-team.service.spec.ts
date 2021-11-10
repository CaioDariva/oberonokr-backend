import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTeamService } from './delete-team.service';

describe('DeleteTeamService', () => {
  let service: DeleteTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTeamService, PrismaService],
    }).compile();

    service = module.get<DeleteTeamService>(DeleteTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
