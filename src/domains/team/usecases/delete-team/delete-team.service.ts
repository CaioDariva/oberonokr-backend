import { Prisma, Team } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteTeamService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteOneTeam(where: Prisma.TeamWhereUniqueInput): Promise<Team> {
    return this.prisma.team.delete({ where });
  }
}
