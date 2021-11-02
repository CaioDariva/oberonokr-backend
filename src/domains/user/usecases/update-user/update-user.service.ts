import { User } from '../../entity/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from '../../interface/user-interface';
import { IUpdateUserService } from '../../interface/user-interface';
import { ServiceUseCase } from 'src/domains/service-usecase.interface';
@Injectable()
export class UpdateUserService
  implements ServiceUseCase<IUpdateUserService, User>
{
  constructor(
    @Inject('UserRepository')
    private readonly service: IUserRepository,
  ) {}
  public async execute(request: IUpdateUserService): Promise<User> {
    return await this.service.update(request);
  }
}
