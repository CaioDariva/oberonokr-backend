import { Controller, Get } from '@nestjs/common';
import { AllTeamsService } from './all-teams.service';

@Controller('teams')
export class AllTeamsController {
  constructor(private readonly service: AllTeamsService) {}
  @Get()
  async handle() {
    return this.service.execute();
  }
}
