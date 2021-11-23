import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteTeamService } from './delete-team.service';

@Controller('delete-team/:id')
@ApiTags('Team')
export class DeleteTeamController {
  constructor(private readonly service: DeleteTeamService) {}
  @Delete()
  async delete(@Param('id') id: string) {
    return this.service.deleteOneTeam({ id: Number(id) });
  }
}
