import { Injectable } from '@nestjs/common';
import { ServiceUseCase } from 'src/helpers/service-usecase.interface';
import { PrismaService } from '../../../../prisma/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entity/user.entity';

@Injectable()
export class CreateUserService implements ServiceUseCase<CreateUserDto, User> {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateUserDto): Promise<User> {
    // const data;
    return await this.prisma.user.create({ data: request });
  }
}
