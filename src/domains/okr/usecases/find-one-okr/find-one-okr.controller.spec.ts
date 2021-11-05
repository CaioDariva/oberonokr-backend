import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOneOkrController } from './find-one-okr.controller';
import { FindOneOkrService } from './find-one-okr.service';

describe('FindOneOkrController', () => {
  let controller: FindOneOkrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneOkrService, PrismaService],
      controllers: [FindOneOkrController],
    }).compile();

    controller = module.get<FindOneOkrController>(FindOneOkrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
