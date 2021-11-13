import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeamDto } from '../../dto/create-team.dto';
import { CreateTeamServices } from './create-team.service';

@Controller('create-team')
export class CreateTeamController {
  constructor(private readonly service: CreateTeamServices) {}
  @Post()
  public async handle(@Body() request: CreateTeamDto) {
    return await this.service.execute(request);
  }
}
