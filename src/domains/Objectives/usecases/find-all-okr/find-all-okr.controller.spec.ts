import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllOkrController } from './find-all-okr.controller';
import { FindAllOkrService } from './find-all-okr.service';

describe('FindAllOkrController', () => {
  let controller: FindAllOkrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllOkrService, PrismaService],
      controllers: [FindAllOkrController],
    }).compile();

    controller = module.get<FindAllOkrController>(FindAllOkrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
