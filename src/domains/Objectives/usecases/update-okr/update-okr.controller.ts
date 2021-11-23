import { UpdateOkrDto } from '../../dto/update-okr.dto';
import { UpdateOkrService } from './update-okr.service';
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('update-okr')
@ApiTags('Objectives')
export class UpdateOkrController {
  constructor(private readonly service: UpdateOkrService) {}
  @Patch(':id')
  public async handle(@Param('id') id: string, @Body() request: UpdateOkrDto) {
    return await this.service.execute(+id, request);
  }
}
