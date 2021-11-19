import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetTeamService {
  constructor(private prisma: PrismaService) {}
  async execute(id: number) {
    return await this.prisma.team.findUnique({
      where: { id },
      include: {
        Users: { select: { id: true, name: true, surname: true, email: true } },
      },
    });
  }
}
