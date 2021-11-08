import { PrismaService } from './../prisma/prisma.service';
import { FindUserByEmailService } from '../domains/user/usecases/find-by-email/find-user-by-email.service';
import { User } from './../domains/user/entity/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './model/UserToken';
import bcrypt from 'bcrypt';
import { UnauthorizedError } from './error/Unauthorized.error';
import { UserPayload } from './model/UserPaylod';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: FindUserByEmailService,
    private readonly prisma: PrismaService,
  ) {}

  async Login(email: string, password: string): Promise<UserToken> {
    const user: User = await this.validateUser(email, password);
    const lenghtUserDataBase = await (await this.prisma.user.findMany()).length;

    let payload: UserPayload = {
      id: user.id,
      email: user.email,
      username: user.name,
      superAdmin: false,
    };

    if (lenghtUserDataBase <= 1) {
      payload = {
        id: user.id,
        email: user.email,
        username: user.name,
        superAdmin: true,
      };
    } else {
      payload = {
        id: user.id,
        email: user.email,
        username: user.name,
        superAdmin: false,
      };
    }

    return {
      id: user.id,
      username: user.name,
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, password: string) {
    const user: User = await this.userService.execute(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return { ...user, password: undefined };
      }
    }

    throw new UnauthorizedError('Email ou senha são incorretos');

    return;
  }
}
