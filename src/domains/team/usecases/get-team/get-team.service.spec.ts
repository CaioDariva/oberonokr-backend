import { Test, TestingModule } from '@nestjs/testing';
import { GetTeamService } from './get-team.service';

describe('GetTeamService', () => {
  let service: GetTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTeamService],
    }).compile();

    service = module.get<GetTeamService>(GetTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
