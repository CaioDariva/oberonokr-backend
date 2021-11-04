import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamController } from './usecases/create-team/create-team.controller';
import { CreateTeamService } from './usecases/create-team/create-team.service';
import { GetTeamController } from './usecases/get-team/get-team.controller';
import { GetTeamService } from './usecases/get-team/get-team.service';
import { AllTeamsService } from './usecases/all-teams/all-teams.service';
import { AllTeamsController } from './usecases/all-teams/all-teams.controller';
import { UpdateTeamService } from './usecases/update-team/update-team.service';
import { DeleteTeamController } from './usecases/delete-team/delete-team.controller';
import { DeleteTeamService } from './usecases/delete-team/delete-team.service';
import { UpdateTeamController } from './usecases/update-team/update-team.controller';

@Module({
  controllers: [
    CreateTeamController,
    GetTeamController,
    AllTeamsController,
    DeleteTeamController,
    UpdateTeamController,
  ],
  providers: [
    CreateTeamService,
    PrismaService,
    GetTeamService,
    AllTeamsService,
    UpdateTeamService,
    DeleteTeamService,
  ],
  imports: [PrismaService],
})
export class TeamModule {}
