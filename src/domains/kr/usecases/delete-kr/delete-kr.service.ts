import { Keyresults, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteKrService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteOneKr(
    where: Prisma.KeyresultsWhereUniqueInput,
  ): Promise<Keyresults> {
    return this.prisma.keyresults.delete({ where });
  }
}
