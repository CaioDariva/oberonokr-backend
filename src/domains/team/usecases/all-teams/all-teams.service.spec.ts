import { Test, TestingModule } from '@nestjs/testing';
import { AllTeamsService } from './all-teams.service';

describe('AllTeamsService', () => {
  let service: AllTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllTeamsService],
    }).compile();

    service = module.get<AllTeamsService>(AllTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
