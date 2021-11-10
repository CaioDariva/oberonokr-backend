import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AllTeamsController } from './all-teams.controller';
import { AllTeamsService } from './all-teams.service';

describe('AllTeamsController', () => {
  let controller: AllTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllTeamsService, PrismaService],
      controllers: [AllTeamsController],
    }).compile();

    controller = module.get<AllTeamsController>(AllTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
