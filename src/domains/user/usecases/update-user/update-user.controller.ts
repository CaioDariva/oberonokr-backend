import { UpdateUserDto } from './../../dto/update-user.dto';
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('update-user/:id')
@ApiTags('User')
export class UpdateUserController {
  constructor(private readonly service: UpdateUserService) {}
  @Patch()
  public async handle(@Body() request: UpdateUserDto, @Param('id') id: string) {
    return this.service.execute(+id, request);
  }
}
