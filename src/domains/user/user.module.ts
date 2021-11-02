import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';
import { UpdateUserService } from './usecases/update-user/update-user.service';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService, PrismaService, UpdateUserService],
})
export class UserModule {}
