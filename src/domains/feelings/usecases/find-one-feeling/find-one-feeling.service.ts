import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneFeelingService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return await this.prisma.feeling.findUnique({ where: { id } });
  }
}
