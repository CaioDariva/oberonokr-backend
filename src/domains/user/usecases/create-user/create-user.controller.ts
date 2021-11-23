import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('create-user')
@ApiTags('User')
export class CreateUserController {
  constructor(private readonly service: CreateUserService) {}
  @Post()
  public async handle(@Body() request: CreateUserDto) {
    return await this.service.execute(request);
  }
}
