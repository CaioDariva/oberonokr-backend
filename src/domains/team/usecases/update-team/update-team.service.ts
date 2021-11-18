import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTeamDto } from '../../dto/update-team.dto';

@Injectable()
export class UpdateTeamService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: number, request: UpdateTeamDto) {
    const users = request.users?.map((user) => ({
      id: user,
    }));
    return this.prisma.team.update({
      data: {
        ...request,
        users: {
          connect: users,
        },
      },
      where: { id },
    });
  }
}
