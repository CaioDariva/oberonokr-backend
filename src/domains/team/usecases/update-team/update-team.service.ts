import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTeamDto } from '../../dto/update-team.dto';

@Injectable()
export class UpdateTeamService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: number, { userId, ...rest }: UpdateTeamDto) {
    userId.forEach(async (value) => {
      await this.prisma.team.update({
        where: { id },
        data: { ...rest, users: { connect: { id: value } } },
      });
    });

    return await this.prisma.team.findUnique({
      where: { id },
      include: {
        users: { select: { id: true, name: true, surname: true, email: true } },
      },
    });
  }
}
