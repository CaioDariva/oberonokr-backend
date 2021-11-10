import { Test, TestingModule } from '@nestjs/testing';
import { DeleteFeelingController } from './delete-feeling.controller';

describe('DeleteFeelingController', () => {
  let controller: DeleteFeelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteFeelingController],
    }).compile();

    controller = module.get<DeleteFeelingController>(DeleteFeelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
