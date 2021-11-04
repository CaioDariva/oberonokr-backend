import { Test, TestingModule } from '@nestjs/testing';
import { DeleteTeamController } from './delete-team.controller';

describe('DeleteTeamController', () => {
  let controller: DeleteTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteTeamController],
    }).compile();

    controller = module.get<DeleteTeamController>(DeleteTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
