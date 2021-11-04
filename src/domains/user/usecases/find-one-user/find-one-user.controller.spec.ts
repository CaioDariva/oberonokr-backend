import { Test, TestingModule } from '@nestjs/testing';
import { FindOneUserController } from './find-one-user.controller';

describe('FindOneUserController', () => {
  let controller: FindOneUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneUserController],
    }).compile();

    controller = module.get<FindOneUserController>(FindOneUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
