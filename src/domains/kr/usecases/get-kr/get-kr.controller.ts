import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetKrService } from './get-kr.service';

@Controller('find-one-kr/:id')
@ApiTags('Kr')
export class GetKrController {
  constructor(private readonly service: GetKrService) {}
  @Get()
  public async handle(@Param('id') id: number) {
    return this.service.execute(+id);
  }
}
