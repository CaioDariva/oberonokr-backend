import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTeamDto } from '../../dto/update-team.dto';

@Injectable()
export class UpdateTeamService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(id: number, data: UpdateTeamDto) {
    return this.prisma.team.update({
      data,
      where: {
        id: id,
      },
    });
  }
}
