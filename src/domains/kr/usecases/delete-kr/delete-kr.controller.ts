import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteKrService } from './delete-kr.service';

@Controller('delete-kr/:id')
export class DeleteKrController {
  constructor(private readonly service: DeleteKrService) {}
  @Delete()
  async handle(@Param('id') id: string) {
    return this.service.execute({ id: +id });
  }
}
