import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './jwt.constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindUserByEmailService } from 'src/domains/user/usecases/find-by-email/find-user-by-email.service';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, PrismaService, FindUserByEmailService],
})
export class AuthModule {}
