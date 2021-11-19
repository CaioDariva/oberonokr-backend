import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateOkrController } from './update-okr.controller';
import { UpdateOkrService } from './update-okr.service';

describe('UpdateOkrController', () => {
  let controller: UpdateOkrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateOkrService, PrismaService],
      controllers: [UpdateOkrController],
    }).compile();

    controller = module.get<UpdateOkrController>(UpdateOkrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
