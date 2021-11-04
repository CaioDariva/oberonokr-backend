import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamController } from './get-team.controller';

describe('GetTeamController', () => {
  let controller: GetTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTeamController],
    }).compile();

    controller = module.get<GetTeamController>(GetTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
