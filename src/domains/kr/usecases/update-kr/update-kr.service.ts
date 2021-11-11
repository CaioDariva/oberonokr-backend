import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UpdateKrService {
  constructor(private readonly prisma: PrismaService) {}

  async updateOneKr(id: number, data: Prisma.KeyresultsUpdateInput) {
    return this.prisma.keyresults.update({
      data,
      where: {
        id: id,
      },
    });
  }
}
