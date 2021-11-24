import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindOneUserService } from './find-one-user.service';

@Controller('find-one-user')
@ApiTags('User')
export class FindOneUserController {
  constructor(private readonly service: FindOneUserService) {}
  @Get(':id')
  public async handle(@Param('id') id: number) {
    return await this.service.execute(id);
  }
}
