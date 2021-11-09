import { Injectable } from '@nestjs/common';
import { FindUserByEmailService } from '../domains/user/usecases/find-by-email/find-user-by-email.service';

// Bcrypt
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './error/Unauthorized.error';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './model/UserToken';
import { UserPayload } from './model/UserPayload';
import { User } from 'src/domains/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: FindUserByEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, senha: string): Promise<UserToken> {
    const usuario: User = await this.validateUser(email, senha);

    const payload: UserPayload = {
      username: usuario.email,
      sub: usuario.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(email: string, senha: string) {
    const usuario = await this.userService.execute(email);

    if (usuario) {
      const isPasswordValid = await bcrypt.compare(senha, usuario.password);

      if (isPasswordValid) {
        return {
          ...usuario,
          senha: undefined,
        };
      }
    }

    throw new UnauthorizedError('E-mail e/ou senha fornecidos são incorretos.');
  }
}
