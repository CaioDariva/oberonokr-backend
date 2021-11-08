import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return this.prisma.okr.delete({ where: { id } });
  }
}
