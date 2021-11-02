import { PrismaService } from './../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';

describe('CreateUserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CreateUserService, PrismaService],
      controllers: [CreateUserController],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
