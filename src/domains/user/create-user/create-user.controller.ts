import { User } from '.prisma/client';
import { Controller } from '@nestjs/common';
import { ControllerUseCases } from 'src/helpers/controller-usecase.interface';
import { CreateUserService } from './create-user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('create-user')
export class CreateUserController
  implements ControllerUseCases<CreateUserDto, User>
{
  constructor(private readonly service: CreateUserService) {}
  public async handle(request: CreateUserDto): Promise<User> {
    return await this.service.execute(request);
  }
}
