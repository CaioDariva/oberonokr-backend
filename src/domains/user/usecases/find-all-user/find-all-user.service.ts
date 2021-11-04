import { Injectable } from '@nestjs/common';
import { ServiceUseCase } from 'src/domains/service-usecase.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../../entity/user.entity';

@Injectable()
export class FindAllUserService implements ServiceUseCase<never, User[]> {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
