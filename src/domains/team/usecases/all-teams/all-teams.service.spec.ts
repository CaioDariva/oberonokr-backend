import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AllTeamsService } from './all-teams.service';

describe('AllTeamsService', () => {
  let service: AllTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllTeamsService, PrismaService],
    }).compile();

    service = module.get<AllTeamsService>(AllTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
