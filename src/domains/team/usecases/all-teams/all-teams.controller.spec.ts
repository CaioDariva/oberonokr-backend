import { Test, TestingModule } from '@nestjs/testing';
import { AllTeamsController } from './all-teams.controller';

describe('AllTeamsController', () => {
  let controller: AllTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllTeamsController],
    }).compile();

    controller = module.get<AllTeamsController>(AllTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
