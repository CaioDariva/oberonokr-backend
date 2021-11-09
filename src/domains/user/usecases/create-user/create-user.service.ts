import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entity/user.entity';
import { Prisma } from '.prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateUserDto): Promise<User> {
    const data: Prisma.UserUncheckedCreateInput = {
      ...request,
      password: await bcrypt.hash(request.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }
}
