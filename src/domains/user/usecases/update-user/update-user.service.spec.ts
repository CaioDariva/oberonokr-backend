import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserService } from './update-user.service';
import { UserRepositoryInMemmory } from '../../inMemmory/user-inmemmory';

describe('UpdateUserService', () => {
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
