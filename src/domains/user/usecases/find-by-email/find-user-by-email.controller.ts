import { FindUserByEmailService } from './find-user-by-email.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('find-user-by-email')
@ApiTags('User')
export class FindUserByEmailController {
  constructor(private readonly service: FindUserByEmailService) {}
  @Get('email')
  public async handle(@Param('email') email: string) {
    return await this.service.execute(email);
  }
}
