import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUserService } from './domains/user/create-user/create-user.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CreateUserController } from './domains/user/create-user/create-user.controller';
import { UserModule } from './domains/user/user.module';
@Module({
  controllers: [AppController, CreateUserController],
  providers: [AppService, CreateUserService, PrismaService],
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
