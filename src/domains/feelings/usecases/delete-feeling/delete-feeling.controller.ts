import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteOkrService } from 'src/domains/Objectives/usecases/delete-okr/delete-okr.service';

@Controller('delete-feeling')
@ApiTags('Felings')
export class DeleteFeelingController {
  constructor(private readonly service: DeleteOkrService) {}
  @Delete(':id')
  public async handle(@Param('id') id: number) {
    return await this.service.execute(+id);
  }
}
