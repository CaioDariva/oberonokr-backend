import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { GetKrController } from './get-kr.controller';
import { GetKrService } from './get-kr.service';

describe('GetKrController', () => {
  let controller: GetKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetKrService, PrismaService],
      controllers: [GetKrController],
    }).compile();

    controller = module.get<GetKrController>(GetKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
