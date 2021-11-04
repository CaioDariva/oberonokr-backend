import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
