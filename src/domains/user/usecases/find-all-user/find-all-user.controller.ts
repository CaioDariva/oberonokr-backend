import { Controller, Get } from '@nestjs/common';
import { FindAllUserService } from './find-all-user.service';

@Controller('find-all-user')
export class FindAllUserController {
  constructor(private readonly service: FindAllUserService) {}
  @Get()
  public async handle() {
    return await this.service.execute();
  }
}
