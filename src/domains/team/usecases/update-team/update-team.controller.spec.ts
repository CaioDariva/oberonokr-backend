import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTeamController } from './update-team.controller';
import { UpdateTeamService } from './update-team.service';

describe('UpdateTeamController', () => {
  let controller: UpdateTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTeamService, PrismaService],

      controllers: [UpdateTeamController],
    }).compile();

    controller = module.get<UpdateTeamController>(UpdateTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
