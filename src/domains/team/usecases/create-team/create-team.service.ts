import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../../dto/create-team.dto';

@Injectable()
export class CreateTeamServices {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateTeamDto) {
    return await this.prisma.team.create({ data: request });
  }
}
