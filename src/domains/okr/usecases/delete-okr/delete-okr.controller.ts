import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteOkrService } from './delete-okr.service';

@Controller('delete-okr')
export class DeleteOkrController {
  constructor(private readonly service: DeleteOkrService) {}
  @Delete(':id')
  public async handle(@Param('id') id: string) {
    return this.service.execute(+id);
  }
}
