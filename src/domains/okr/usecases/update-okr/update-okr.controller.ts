import { UpdateTeamDto } from './../../../team/dto/update-team.dto';
import { UpdateOkrService } from './update-okr.service';
import { Body, Controller, Param, Patch } from '@nestjs/common';

@Controller('update-okr')
export class UpdateOkrController {
  constructor(private readonly service: UpdateOkrService) {}
  @Patch(':id')
  public async handle(@Param('id') id: string, @Body() request: UpdateTeamDto) {
    return await this.service.execute(+id, request);
  }
}
