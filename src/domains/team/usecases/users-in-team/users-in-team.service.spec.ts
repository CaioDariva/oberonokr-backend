import { Test, TestingModule } from '@nestjs/testing';
import { UsersInTeamService } from './users-in-team.service';

describe('UsersInTeamService', () => {
  let service: UsersInTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersInTeamService],
    }).compile();

    service = module.get<UsersInTeamService>(UsersInTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
