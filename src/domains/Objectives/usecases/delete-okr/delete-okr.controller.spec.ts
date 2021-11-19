import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOkrController } from './delete-okr.controller';
import { DeleteOkrService } from './delete-okr.service';

describe('DeleteOkrController', () => {
  let controller: DeleteOkrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteOkrService, PrismaService],
      controllers: [DeleteOkrController],
    }).compile();

    controller = module.get<DeleteOkrController>(DeleteOkrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
