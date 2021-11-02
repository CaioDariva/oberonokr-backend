import { Test, TestingModule } from '@nestjs/testing';
import { UserRepositoryInMemmory } from 'src/domains/user/inMemmory/user-inmemmory';
import { UpdateUserService } from 'src/domains/user/usecases/update-user/update-user.service';

describe('PrismaService', () => {
  let service: UpdateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateUserService,
        {
          provide: 'UserRepository',
          useClass: UserRepositoryInMemmory,
        },
      ],
    }).compile();

    service = module.get<UpdateUserService>(UpdateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
