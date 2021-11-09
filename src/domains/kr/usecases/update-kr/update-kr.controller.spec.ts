import { Test, TestingModule } from '@nestjs/testing';
import { UpdateKrController } from './update-kr.controller';

describe('UpdateKrController', () => {
  let controller: UpdateKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateKrController],
    }).compile();

    controller = module.get<UpdateKrController>(UpdateKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
