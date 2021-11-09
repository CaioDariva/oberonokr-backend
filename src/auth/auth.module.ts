import { PrismaService } from './../prisma/prisma.service';
import { FindOneUserService } from './../domains/user/usecases/find-one-user/find-one-user.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../domains/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { FindUserByEmailService } from 'src/domains/user/usecases/find-by-email/find-user-by-email.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    FindUserByEmailService,
    FindOneUserService,
    PrismaService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
