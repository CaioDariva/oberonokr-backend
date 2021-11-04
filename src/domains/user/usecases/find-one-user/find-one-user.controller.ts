import { Controller, Get, Param } from '@nestjs/common';
import { FindOneUserService } from './find-one-user.service';

@Controller('find-one-user')
export class FindOneUserController {
  constructor(private readonly service: FindOneUserService) {}
  @Get(':id')
  public async handle(@Param('id') id: number) {
    return await this.service.execute(id);
  }
}
