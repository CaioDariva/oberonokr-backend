import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFeelingController } from './update-feeling.controller';
import { UpdateFeelingService } from './update-feeling.service';

describe('UpdateFeelingController', () => {
  let controller: UpdateFeelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFeelingService, PrismaService],
      controllers: [UpdateFeelingController],
    }).compile();

    controller = module.get<UpdateFeelingController>(UpdateFeelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
