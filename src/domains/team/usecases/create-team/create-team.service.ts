import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ServiceUseCase } from 'src/domains/service-usecase.interface';
import { CreateTeamDto } from '../../dto/create-team.dto';
import { Team } from '../../entity/team.entity';

@Injectable()
export class CreateTeamService implements ServiceUseCase<CreateTeamDto, Team> {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateTeamDto): Promise<Team> {
    return await this.prisma.team.create({ data: request });
  }
}
