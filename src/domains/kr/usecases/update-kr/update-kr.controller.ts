import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';
import { UpdateKrService } from './update-kr.service';

@Controller('update-kr/:id')
@ApiTags('Kr')
export class UpdateKrController {
  constructor(private readonly service: UpdateKrService) {}
  @Patch()
  public async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateKr: UpdateKeyresultDto,
  ) {
    return await this.service.updateOneKr(+id, updateKr);
  }
}
