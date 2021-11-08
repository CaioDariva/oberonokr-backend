import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { FindUserByEmailService } from './find-user-by-email.service';

describe('FindByEmailService', () => {
  let service: FindUserByEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindUserByEmailService, PrismaService],
    }).compile();

    service = module.get<FindUserByEmailService>(FindUserByEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
