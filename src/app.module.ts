import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserService } from './domains/user/usecases/create-user/create-user.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreateUserController } from './domains/user/usecases/create-user/create-user.controller';
import { UserModule } from './domains/user/user.module';
@Global()
@Module({
  controllers: [AppController, CreateUserController],
  providers: [AppService, CreateUserService],
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
