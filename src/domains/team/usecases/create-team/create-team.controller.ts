import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTeamDto } from '../../dto/create-team.dto';
import { CreateTeamServices } from './create-team.service';

@Controller('create-team')
@ApiTags('Team')
export class CreateTeamController {
  constructor(private readonly service: CreateTeamServices) {}
  @Post()
  public async handle(@Body() request: CreateTeamDto) {
    return await this.service.execute(request);
  }
}
