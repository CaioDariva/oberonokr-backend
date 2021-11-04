import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamController } from './usecases/create-team/create-team.controller';
import { CreateTeamService } from './usecases/create-team/create-team.service';
import { GetTeamController } from './usecases/get-team/get-team.controller';
import { GetTeamService } from './usecases/get-team/get-team.service';
import { AllTeamsService } from './usecases/all-teams/all-teams.service';
import { AllTeamsController } from './usecases/all-teams/all-teams.controller';

@Module({
  controllers: [CreateTeamController, GetTeamController, AllTeamsController],
  providers: [CreateTeamService, PrismaService, GetTeamService, AllTeamsService],
  imports: [PrismaService],
})
export class TeamModule {}
