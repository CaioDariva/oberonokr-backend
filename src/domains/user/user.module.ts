import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService, PrismaService],
  imports: [PrismaService],
})
export class UserModule {}
