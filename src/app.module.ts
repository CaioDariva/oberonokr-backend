import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserService } from './domains/user/usecases/create-user/create-user.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreateUserController } from './domains/user/usecases/create-user/create-user.controller';
import { UserModule } from './domains/user/user.module';

import { AuthModule } from './auth/auth.module';

import { TeamModule } from './domains/team/team.module';
import { PrismaService } from './prisma/prisma.service';
import { DeleteTeamService } from './domains/team/usecases/delete-team/delete-team.service';
import { KrModule } from './domains/kr/kr.module';
@Module({
  controllers: [AppController, CreateUserController],
  providers: [AppService, CreateUserService, PrismaService, DeleteTeamService],
  imports: [PrismaModule, UserModule, AuthModule, TeamModule, KrModule],
})
export class AppModule {}
