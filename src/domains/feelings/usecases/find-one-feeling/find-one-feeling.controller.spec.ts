import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOneFeelingController } from './find-one-feeling.controller';
import { FindOneFeelingService } from './find-one-feeling.service';

describe('FindOneFeelingController', () => {
  let controller: FindOneFeelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneFeelingService, PrismaService],
      controllers: [FindOneFeelingController],
    }).compile();

    controller = module.get<FindOneFeelingController>(FindOneFeelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
