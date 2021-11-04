import { Team } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetTeamService {
  constructor(private db: PrismaService) {}

  async findUnique(id: number): Promise<Team> {
    const team = await this.db.team.findUnique({ where: { id } });

    return team;
  }
}
