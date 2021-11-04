import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUserService } from './find-all-user.service';
import { PrismaService } from '../../../../prisma/prisma.service';
describe('FindAllUserService', () => {
  let service: FindAllUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllUserService, PrismaService],
    }).compile();

    service = module.get<FindAllUserService>(FindAllUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
