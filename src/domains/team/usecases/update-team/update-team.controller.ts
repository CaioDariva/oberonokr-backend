import { Team } from '.prisma/client';
import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UpdateTeamDto } from '../../dto/update-team.dto';
import { UpdateTeamService } from './update-team.service';

@Controller('update-team/:id')
export class UpdateTeamController {
  constructor(private readonly service: UpdateTeamService) {}
  @Patch()
  async update(
    @Body() updateTeam: UpdateTeamDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Team> {
    return this.service.updateOneTeam(id, updateTeam);
  }
}
