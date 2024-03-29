import { FindOneUserService } from './domains/user/usecases/find-one-user/find-one-user.service';
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
import { CreateOkrService } from './domains/Objectives/usecases/create-okr/create-okr.service';
import { CreateOkrController } from './domains/Objectives/usecases/create-okr/create-okr.controller';
import { UpdateOkrService } from './domains/Objectives/usecases/update-okr/update-okr.service';
import { UpdateOkrController } from './domains/Objectives/usecases/update-okr/update-okr.controller';
import { FindAllOkrService } from './domains/Objectives/usecases/find-all-okr/find-all-okr.service';
import { FindAllOkrController } from './domains/Objectives/usecases/find-all-okr/find-all-okr.controller';
import { FindOneOkrService } from './domains/Objectives/usecases/find-one-okr/find-one-okr.service';
import { FindOneOkrController } from './domains/Objectives/usecases/find-one-okr/find-one-okr.controller';
import { DeleteOkrService } from './domains/Objectives/usecases/delete-okr/delete-okr.service';
import { DeleteOkrController } from './domains/Objectives/usecases/delete-okr/delete-okr.controller';
import { OkrModule } from './domains/Objectives/okr.module';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  controllers: [
    AppController,
    CreateUserController,
    CreateOkrController,
    UpdateOkrController,
    FindAllOkrController,
    FindOneOkrController,
    DeleteOkrController,
  ],
  providers: [
    AppService,
    CreateUserService,
    PrismaService,
    DeleteTeamService,
    CreateOkrService,
    UpdateOkrService,
    FindAllOkrService,
    FindOneOkrService,
    DeleteOkrService,
    FindOneUserService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    TeamModule,
    KrModule,
    OkrModule,
  ],
})
export class AppModule {}
