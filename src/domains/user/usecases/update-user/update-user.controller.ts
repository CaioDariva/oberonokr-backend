import { UpdateUserDto } from './../../dto/update-user.dto';
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';

@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly service: UpdateUserService) {}
  @Patch(':id')
  public async handle(@Param('id') id: string, @Body() request: UpdateUserDto) {
    return this.service.execute(+id, request);
  }
}
