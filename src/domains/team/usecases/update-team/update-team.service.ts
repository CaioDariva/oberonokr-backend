import { Prisma, Team } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateTeamService {
  constructor(private readonly prisma: PrismaService) {}

  async updateOneTeam(
    teamId: number,
    data: Prisma.TeamUpdateInput,
  ): Promise<Team> {
    return this.prisma.team.update({
      data,
      where: {
        id: teamId,
      },
    });
  }
}
