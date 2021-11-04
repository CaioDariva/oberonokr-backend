import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';

@Controller('delete-user')
export class DeleteUserController {
  constructor(private readonly service: DeleteUserService) {}
  @Delete(':id')
  public async handle(@Param('id') id: string) {
    return await this.service.execute(+id);
  }
}
