import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTeamController } from './delete-team.controller';
import { DeleteTeamService } from './delete-team.service';

describe('DeleteTeamController', () => {
  let controller: DeleteTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteTeamService, PrismaService],
      controllers: [DeleteTeamController],
    }).compile();

    controller = module.get<DeleteTeamController>(DeleteTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
