import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/prisma.service';
import { FindAllUserController } from './find-all-user.controller';
import { FindAllUserService } from './find-all-user.service';

describe('FindAllUserController', () => {
  let controller: FindAllUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllUserService, PrismaService],
      controllers: [FindAllUserController],
    }).compile();

    controller = module.get<FindAllUserController>(FindAllUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
