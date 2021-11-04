import { Team } from '.prisma/client';
import { Controller, Get } from '@nestjs/common';
import { AllTeamsService } from './all-teams.service';

@Controller('teams')
export class AllTeamsController {
  constructor(private readonly service: AllTeamsService) {}
  @Get()
  async findMany(): Promise<Team[]> {
    return this.service.getAll();
  }
}
