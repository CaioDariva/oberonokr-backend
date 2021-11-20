import { PrismaService } from '../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return this.prisma.objective.findUnique({
      where: { id },
      include: { krs: true },
    });
  }
}
