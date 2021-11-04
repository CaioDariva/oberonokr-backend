import { Team } from '.prisma/client';
import { Controller, Get, Param } from '@nestjs/common';
import { GetTeamService } from './get-team.service';

@Controller('team/:id')
export class GetTeamController {
  constructor(private readonly service: GetTeamService) {}
  @Get()
  findUnique(@Param('id') id: number): Promise<Team> {
    return this.service.findUnique(+id);
  }
}
