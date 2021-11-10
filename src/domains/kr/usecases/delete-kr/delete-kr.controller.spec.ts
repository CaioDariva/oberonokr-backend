import { PrismaService } from './../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeleteKrController } from './delete-kr.controller';
import { DeleteKrService } from './delete-kr.service';

describe('DeleteKrController', () => {
  let controller: DeleteKrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteKrService, PrismaService],
      controllers: [DeleteKrController],
    }).compile();

    controller = module.get<DeleteKrController>(DeleteKrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
