import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateKrController } from './create-kr.controller';
import { CreateKrService } from './create-kr.service';

describe('CreateKrController', () => {
  let controller: CreateKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateKrService, PrismaService],
      controllers: [CreateKrController],
    }).compile();

    controller = module.get<CreateKrController>(CreateKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
