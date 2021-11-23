import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteKrService } from './delete-kr.service';

@Controller('delete-kr/:id')
@ApiTags('Kr')
export class DeleteKrController {
  constructor(private readonly service: DeleteKrService) {}
  @Delete()
  async handle(@Param('id') id: string) {
    return this.service.execute({ id: +id });
  }
}
