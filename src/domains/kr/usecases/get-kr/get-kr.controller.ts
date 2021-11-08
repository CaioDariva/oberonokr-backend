import { Keyresults } from '.prisma/client';
import { Controller, Get, Param } from '@nestjs/common';
import { GetKrService } from './get-kr.service';

@Controller('kr/:id')
export class GetKrController {
  constructor(private readonly service: GetKrService) {}
  @Get()
  findUnique(@Param('id') id: number): Promise<Keyresults> {
    return this.service.findUnique(+id);
  }
}
