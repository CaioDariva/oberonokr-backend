import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateTeamService } from './create-team.service';

describe('CreateTeamService', () => {
  let service: CreateTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTeamService, PrismaService],
    }).compile();

    service = module.get<CreateTeamService>(CreateTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
