import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteTeamService } from './delete-team.service';

@Controller('delete-team/:id')
export class DeleteTeamController {
  constructor(private readonly service: DeleteTeamService) {}
  @Delete()
  async delete(@Param('id') id: string) {
    return this.service.deleteOneTeam({ id: Number(id) });
  }
}
