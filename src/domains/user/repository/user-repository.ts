import { PrismaService } from './../../../prisma/prisma.service';
import { Global, Module } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';
import {
  IUpdateUserService,
  IUserRepository,
} from '../interface/user-interface';
import { Prisma } from '.prisma/client';

@Global()
@Module({
  exports: [UserRepository],
})
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserUncheckedCreateInput = {
      ...createUserDto,
    };

    return await this.prisma.user.create({ data });
  }

  public async update({
    id,
    UpdateUserDto,
  }: IUpdateUserService): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: UpdateUserDto,
    });
  }
  findById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
