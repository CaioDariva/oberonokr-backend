import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';
import { UpdateUserService } from './usecases/update-user/update-user.service';
import { UpdateUserController } from './usecases/update-user/update-user.controller';
import { FindAllUserService } from './usecases/find-all-user/find-all-user.service';
import { FindAllUserController } from './usecases/find-all-user/find-all-user.controller';
import { FindOneUserService } from './usecases/find-one-user/find-one-user.service';
import { FindOneUserController } from './usecases/find-one-user/find-one-user.controller';
import { DeleteUserService } from './usecases/delete-user/delete-user.service';
import { DeleteUserController } from './usecases/delete-user/delete-user.controller';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    FindAllUserController,
    FindOneUserController,
    DeleteUserController,
  ],
  providers: [
    PrismaService,
    CreateUserService,
    UpdateUserService,
    FindAllUserService,
    FindOneUserService,
    DeleteUserService,
  ],
  imports: [PrismaService],
})
export class UserModule {}
