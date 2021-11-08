import { Test, TestingModule } from '@nestjs/testing';
import { CreateKrController } from './create-kr.controller';

describe('CreateKrController', () => {
  let controller: CreateKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateKrController],
    }).compile();

    controller = module.get<CreateKrController>(CreateKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
