import { Keyresults } from '.prisma/client';
import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';
import { UpdateKrService } from './update-kr.service';

@Controller('update-kr/:id')
export class UpdateKrController {
  constructor(private readonly service: UpdateKrService) {}
  @Put()
  async update(
    @Body() updateKr: UpdateKeyresultDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Keyresults> {
    return this.service.updateOneKr(id, updateKr);
  }
}
