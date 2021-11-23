import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetTeamService } from './get-team.service';

@Controller('team/:id')
@ApiTags('Team')
export class GetTeamController {
  constructor(private readonly service: GetTeamService) {}
  @Get()
  handle(@Param('id') id: number) {
    return this.service.execute(+id);
  }
}
