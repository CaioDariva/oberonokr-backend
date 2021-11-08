import { Test, TestingModule } from '@nestjs/testing';
import { GetKrController } from './get-kr.controller';

describe('GetKrController', () => {
  let controller: GetKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetKrController],
    }).compile();

    controller = module.get<GetKrController>(GetKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
