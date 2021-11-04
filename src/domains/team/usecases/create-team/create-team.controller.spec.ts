import { Test, TestingModule } from '@nestjs/testing';
import { CreateTeamController } from './create-team.controller';

describe('CreateTeamController', () => {
  let controller: CreateTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateTeamController],
    }).compile();

    controller = module.get<CreateTeamController>(CreateTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
