import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateOkrController } from './create-okr.controller';
import { CreateOkrService } from './create-okr.service';

describe('CreateOkrController', () => {
  let controller: CreateOkrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateOkrService, PrismaService],
      controllers: [CreateOkrController],
    }).compile();

    controller = module.get<CreateOkrController>(CreateOkrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
