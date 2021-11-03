import { PrismaService } from '../../../../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';
import { UserRepositoryInMemmory } from '../../inMemmory/user-inmemmory';

describe('CreateUserController', () => {
  let controller: CreateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserService,
        {
          provide: 'UserRepository',
          useClass: UserRepositoryInMemmory,
        },
      ],
      controllers: [CreateUserController],
    }).compile();

    controller = module.get<CreateUserController>(CreateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
