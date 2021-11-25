import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AllTeamsService {
  constructor(private prisma: PrismaService) {}
  async execute() {
    return this.prisma.team.findMany({
      include: {
        users: { select: { id: true, name: true, surname: true, email: true } },
      },
    });
  }
}
