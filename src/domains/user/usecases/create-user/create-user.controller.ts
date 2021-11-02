import { User } from '.prisma/client';
import { Controller, Post, Body } from '@nestjs/common';
import { ControllerUseCases } from 'src/domains/controller-usecase.interface';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from '../../dto/create-user.dto';

@Controller('create-user')
export class CreateUserController
  implements ControllerUseCases<CreateUserDto, User>
{
  constructor(private readonly service: CreateUserService) {}
  @Post()
  public async handle(@Body() request: CreateUserDto): Promise<User> {
    return await this.service.execute(request);
  }
}
