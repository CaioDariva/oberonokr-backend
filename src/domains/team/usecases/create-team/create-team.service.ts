import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../../dto/create-team.dto';

@Injectable()
export class CreateTeamServices {
  constructor(private readonly prisma: PrismaService) {}
  public async execute({ userId, name, ...rest }: CreateTeamDto) {
    userId.map(async (value) => {
      return await this.prisma.team.create({
        data: { ...rest, name, users: { connect: { id: value } } },
      });
    });
  }
}
