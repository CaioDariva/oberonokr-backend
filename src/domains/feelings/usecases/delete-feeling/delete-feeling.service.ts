import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteFeelingService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return await this.prisma.feeling.delete({ where: { id } });
  }
}
