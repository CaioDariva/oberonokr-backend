import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';
import { UpdateKrService } from './update-kr.service';

@Controller('update-kr/:id')
export class UpdateKrController {
  constructor(private readonly service: UpdateKrService) {}
  @Patch()
  public async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateKr: UpdateKeyresultDto,
  ) {
    return this.service.updateOneKr(+id, updateKr);
  }
}
