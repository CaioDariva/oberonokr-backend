import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateKrController } from './update-kr.controller';
import { UpdateKrService } from './update-kr.service';

describe('UpdateKrController', () => {
  let controller: UpdateKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateKrService, PrismaService],
      controllers: [UpdateKrController],
    }).compile();

    controller = module.get<UpdateKrController>(UpdateKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
