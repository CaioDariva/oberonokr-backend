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
import { CreateOkrService } from './domains/okr/usecases/create-okr/create-okr.service';
import { CreateOkrController } from './domains/okr/usecases/create-okr/create-okr.controller';
import { UpdateOkrService } from './domains/okr/usecases/update-okr/update-okr.service';
import { UpdateOkrController } from './domains/okr/usecases/update-okr/update-okr.controller';
import { FindAllOkrService } from './domains/okr/usecases/find-all-okr/find-all-okr.service';
import { FindAllOkrController } from './domains/okr/usecases/find-all-okr/find-all-okr.controller';
import { FindOneOkrService } from './domains/okr/usecases/find-one-okr/find-one-okr.service';
import { FindOneOkrController } from './domains/okr/usecases/find-one-okr/find-one-okr.controller';
import { DeleteOkrService } from './domains/okr/usecases/delete-okr/delete-okr.service';
import { DeleteOkrController } from './domains/okr/usecases/delete-okr/delete-okr.controller';
import { OkrModule } from './domains/okr/okr.module';
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
