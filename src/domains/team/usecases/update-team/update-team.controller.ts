import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateTeamDto } from '../../dto/update-team.dto';
import { UpdateTeamService } from './update-team.service';

@Controller('update-team/:id')
export class UpdateTeamController {
  constructor(private readonly service: UpdateTeamService) {}
  @Patch()
  async handle(@Body() request: UpdateTeamDto, @Param('id') id: number) {
    return this.service.execute(id, request);
  }
}
