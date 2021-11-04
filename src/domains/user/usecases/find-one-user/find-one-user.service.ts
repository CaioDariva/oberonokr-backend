import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
