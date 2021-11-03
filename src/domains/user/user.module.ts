import { PrismaService } from './../../prisma/prisma.service';
import { Module, Scope } from '@nestjs/common';
import { CreateUserController } from './usecases/create-user/create-user.controller';
import { CreateUserService } from './usecases/create-user/create-user.service';
import { UpdateUserService } from './usecases/update-user/update-user.service';
import { UserRepository } from './repository/user-repository';
import { UpdateUserController } from './usecases/update-user/update-user.controller';

@Module({
  controllers: [CreateUserController, UpdateUserController],
  providers: [
    CreateUserService,
    PrismaService,
    UpdateUserService,
    {
      provide: 'UserReposiroty',
      useClass: UserRepository,
      scope: Scope.DEFAULT,
    },
  ],
})
export class UserModule {}
