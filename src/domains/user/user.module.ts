import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { CreateUserService } from './create-user/create-user.service';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService, PrismaService],
})
export class UserModule {}
