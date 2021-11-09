import { PrismaService } from '../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserByEmailService {
  constructor(private readonly prisma: PrismaService) {}

  public async execute(email: string) {
    // const x: Prisma.UserWhereUniqueInput
    return this.prisma.user.findFirst({ where: { email } });
  }
}
