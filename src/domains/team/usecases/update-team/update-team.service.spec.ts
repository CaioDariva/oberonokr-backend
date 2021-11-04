import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTeamService } from './update-team.service';

describe('UpdateTeamService', () => {
  let service: UpdateTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTeamService],
    }).compile();

    service = module.get<UpdateTeamService>(UpdateTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
