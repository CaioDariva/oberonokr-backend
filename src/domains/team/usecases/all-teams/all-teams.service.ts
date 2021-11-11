import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AllTeamsService {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return this.prisma.team.findMany();
  }
}
