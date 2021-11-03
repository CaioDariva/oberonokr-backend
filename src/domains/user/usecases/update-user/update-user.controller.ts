import { Controller } from '@nestjs/common';
import { ControllerUseCases } from 'src/domains/controller-usecase.interface';
import { User } from '../../entity/user.entity';
import { IUpdateUserService } from '../../interface/user-interface';
import { UpdateUserService } from './update-user.service';

@Controller('update-user')
export class UpdateUserController
  implements ControllerUseCases<IUpdateUserService, User>
{
  constructor(private readonly service: UpdateUserService) {}
  public async handle(request: IUpdateUserService): Promise<User> {
    return await this.service.execute(request);
  }
}
