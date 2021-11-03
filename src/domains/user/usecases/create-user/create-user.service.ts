import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ServiceUseCase } from 'src/domains/service-usecase.interface';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entity/user.entity';

@Injectable()
export class CreateUserService implements ServiceUseCase<CreateUserDto, User> {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: request });
  }
}
