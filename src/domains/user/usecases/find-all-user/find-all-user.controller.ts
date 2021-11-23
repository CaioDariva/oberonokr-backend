import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllUserService } from './find-all-user.service';

@Controller('find-all-user')
@ApiTags('User')
export class FindAllUserController {
  constructor(private readonly service: FindAllUserService) {}
  @Get()
  public async handle() {
    return await this.service.execute();
  }
}
