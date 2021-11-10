import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFeelingController } from './find-all-feeling.controller';
import { FindAllFeelingService } from './find-all-feeling.service';

describe('FindAllFeelingController', () => {
  let controller: FindAllFeelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFeelingService, PrismaService],
      controllers: [FindAllFeelingController],
    }).compile();

    controller = module.get<FindAllFeelingController>(FindAllFeelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
