import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './jwt.constants';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '1h'},
    })
  ],
  providers: [AuthService, PrismaService]
})
export class AuthModule {}
