import { LoginRequestBody } from './LoginResquestBody.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: LoginRequestBody) {
    return this.service.Login(email, password);
  }
}
