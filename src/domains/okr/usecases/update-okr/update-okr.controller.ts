import { UpdateOkrDto } from './../../dto/update-okr.dto';
import { UpdateOkrService } from './update-okr.service';
import { Body, Controller, Param, Patch } from '@nestjs/common';

@Controller('update-okr')
export class UpdateOkrController {
  constructor(private readonly service: UpdateOkrService) {}
  @Patch(':id')
  public async handle(@Param('id') id: string, @Body() request: UpdateOkrDto) {
    return await this.service.execute(+id, request);
  }
}
