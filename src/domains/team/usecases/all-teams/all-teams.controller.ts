import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AllTeamsService } from './all-teams.service';

@Controller('teams')
@ApiTags('Team')
export class AllTeamsController {
  constructor(private readonly service: AllTeamsService) {}
  @Get()
  async handle() {
    return this.service.execute();
  }
}
