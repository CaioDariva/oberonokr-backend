import { Controller, Get } from '@nestjs/common';
import { ControllerUseCases } from 'src/domains/controller-usecase.interface';
import { User } from '../../entity/user.entity';
import { FindAllUserService } from './find-all-user.service';

@Controller('find-all-user')
export class FindAllUserController
  implements ControllerUseCases<never, User[]>
{
  constructor(private readonly service: FindAllUserService) {}
  @Get()
  public async handle(): Promise<User[]> {
    return await this.service.execute();
  }
}
