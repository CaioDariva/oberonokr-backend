import { Prisma, Keyresults } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateKrService {
  constructor(private readonly prisma: PrismaService) {}

  async updateOneKr(
    krId: number,
    data: Prisma.KeyresultsUpdateInput,
  ): Promise<Keyresults> {
    return this.prisma.keyresults.update({
      data,
      where: {
        id: krId,
      },
    });
  }
}
