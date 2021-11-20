import { PrismaService } from '../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute() {
    return this.prisma.objective.findMany({ include: { krs: true } });
  }
}
