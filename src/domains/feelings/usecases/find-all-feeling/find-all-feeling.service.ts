import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllFeelingService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute() {
    return await this.prisma.feeling.findMany();
  }
}
