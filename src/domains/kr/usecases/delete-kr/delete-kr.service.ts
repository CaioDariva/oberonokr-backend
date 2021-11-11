import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteKrService {
  constructor(private readonly prisma: PrismaService) {}
  async execute(where: Prisma.KeyresultsWhereUniqueInput) {
    return this.prisma.keyresults.delete({ where });
  }
}
