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
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { CreateFeelingService } from './domains/feelings/usecases/create-feeling/create-feeling.service';
import { CreateFeelingController } from './domains/feelings/usecases/create-feeling/create-feeling.controller';
import { FindAllFeelingService } from './domains/feelings/usecases/find-all-feeling/find-all-feeling.service';
import { FindAllFeelingController } from './domains/feelings/usecases/find-all-feeling/find-all-feeling.controller';
import { FindOneFeelingService } from './domains/feelings/usecases/find-one-feeling/find-one-feeling.service';
import { FindOneFeelingController } from './domains/feelings/usecases/find-one-feeling/find-one-feeling.controller';
import { UpdateFeelingController } from './domains/feelings/usecases/update-feeling/update-feeling.controller';
import { UpdateFeelingService } from './domains/feelings/usecases/update-feeling/update-feeling.service';
import { DeleteFeelingService } from './domains/feelings/usecases/delete-feeling/delete-feeling.service';
import { DeleteFeelingController } from './domains/feelings/usecases/delete-feeling/delete-feeling.controller';
@Module({
  controllers: [
    AppController,
    CreateUserController,
    CreateOkrController,
    UpdateOkrController,
    FindAllOkrController,
    FindOneOkrController,
    DeleteOkrController,
    CreateFeelingController,
    FindAllFeelingController,
    FindOneFeelingController,
    UpdateFeelingController,
    DeleteFeelingController,
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    CreateFeelingService,
    FindAllFeelingService,
    FindOneFeelingService,
    UpdateFeelingService,
    DeleteFeelingService,
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
