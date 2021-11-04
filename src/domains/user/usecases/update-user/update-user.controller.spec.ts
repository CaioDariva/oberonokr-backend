import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/prisma.service';
import { UpdateUserController } from './update-user.controller';
import { UpdateUserService } from './update-user.service';

describe('UpdateUserController', () => {
  let controller: UpdateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateUserService, PrismaService],

      controllers: [UpdateUserController],
    }).compile();

    controller = module.get<UpdateUserController>(UpdateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
