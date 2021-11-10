import { UpdateUserDto } from './../../dto/update-user.dto';
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';

@Controller('update-user/:id')
export class UpdateUserController {
  constructor(private readonly service: UpdateUserService) {}
  @Patch()
  public async handle(@Body() request: UpdateUserDto, @Param('id') id: string) {
    return this.service.execute(+id, request);
  }
}
