import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateFeelingController } from './create-feeling.controller';
import { CreateFeelingService } from './create-feeling.service';

describe('CreateFeelingController', () => {
  let controller: CreateFeelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFeelingService, PrismaService],
      controllers: [CreateFeelingController],
    }).compile();

    controller = module.get<CreateFeelingController>(CreateFeelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
