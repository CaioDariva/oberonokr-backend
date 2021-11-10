import { Keyresults } from '.prisma/client';
import { Controller, Get, Param } from '@nestjs/common';
import { GetKrService } from './get-kr.service';

@Controller('find-one-kr/:id')
export class GetKrController {
  constructor(private readonly service: GetKrService) {}
  @Get()
  public async handle(@Param('id') id: number) {
    return this.service.execute(+id);
  }
}
