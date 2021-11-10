import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamController } from './get-team.controller';
import { GetTeamService } from './get-team.service';

describe('GetTeamController', () => {
  let controller: GetTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTeamService, PrismaService],
      controllers: [GetTeamController],
    }).compile();

    controller = module.get<GetTeamController>(GetTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
