import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteOkrService } from 'src/domains/okr/usecases/delete-okr/delete-okr.service';

@Controller('delete-feeling')
export class DeleteFeelingController {
  constructor(private readonly service: DeleteOkrService) {}
  @Delete(':id')
  public async handle(@Param('id') id: number) {
    return await this.service.execute(+id);
  }
}
