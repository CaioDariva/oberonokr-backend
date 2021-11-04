import { PrismaService } from 'src/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindOneUserService } from './find-one-user.service';

describe('FindOneUserService', () => {
  let service: FindOneUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneUserService, PrismaService],
    }).compile();

    service = module.get<FindOneUserService>(FindOneUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
