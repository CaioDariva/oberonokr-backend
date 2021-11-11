import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindAllUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute() {
    return await this.prisma.user.findMany();
  }
}
