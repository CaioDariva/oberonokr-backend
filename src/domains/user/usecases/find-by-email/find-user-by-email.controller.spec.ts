import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByEmailController } from './find-user-by-email.controller';
import { FindUserByEmailService } from './find-user-by-email.service';

describe('FindUserByEmailController', () => {
  let controller: FindUserByEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindUserByEmailService, PrismaService],

      controllers: [FindUserByEmailController],
    }).compile();

    controller = module.get<FindUserByEmailController>(
      FindUserByEmailController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
