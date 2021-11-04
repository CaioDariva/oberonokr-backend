import { Team } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AllTeamsService {
  constructor(private db: PrismaService) {}
  async getAll(): Promise<Team[]> {
    return this.db.team.findMany();
  }
}
