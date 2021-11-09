import { Test, TestingModule } from '@nestjs/testing';
import { DeleteKrController } from './delete-kr.controller';

describe('DeleteKrController', () => {
  let controller: DeleteKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteKrController],
    }).compile();

    controller = module.get<DeleteKrController>(DeleteKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
