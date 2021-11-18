import { Test, TestingModule } from '@nestjs/testing';
import { UsersInTeamController } from './users-in-team.controller';

describe('UsersInTeamController', () => {
  let controller: UsersInTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersInTeamController],
    }).compile();

    controller = module.get<UsersInTeamController>(UsersInTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
