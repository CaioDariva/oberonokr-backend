import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateTeamController } from './create-team.controller';
import { CreateTeamService } from './create-team.service';

describe('CreateTeamController', () => {
  let controller: CreateTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTeamService, PrismaService],
      controllers: [CreateTeamController],
    }).compile();

    controller = module.get<CreateTeamController>(CreateTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
