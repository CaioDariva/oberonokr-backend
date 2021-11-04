import { Team } from '.prisma/client';
import { Controller, Post, Body } from '@nestjs/common';
import { ControllerUseCases } from 'src/domains/controller-usecase.interface';
import { CreateTeamService } from './create-team.service';
import { CreateTeamDto } from '../../dto/create-team.dto';

@Controller('create-team')
export class CreateTeamController
  implements ControllerUseCases<CreateTeamDto, Team>
{
  constructor(private readonly service: CreateTeamService) {}
  @Post()
  public async handle(@Body() request: CreateTeamDto): Promise<Team> {
    return await this.service.execute(request);
  }
}
