import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entity/user.entity';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: request });
  }
}
