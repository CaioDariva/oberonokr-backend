import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTeamController } from './update-team.controller';

describe('UpdateTeamController', () => {
  let controller: UpdateTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateTeamController],
    }).compile();

    controller = module.get<UpdateTeamController>(UpdateTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
