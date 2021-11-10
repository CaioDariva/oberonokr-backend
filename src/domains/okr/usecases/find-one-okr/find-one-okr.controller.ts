import { Controller, Get, Param } from '@nestjs/common';
import { FindOneOkrService } from './find-one-okr.service';

@Controller('find-one/:id')
export class FindOneOkrController {
  constructor(private readonly service: FindOneOkrService) {}
  @Get()
  public async handle(@Param('id') id: number) {
    return await this.service.execute(+id);
  }
}
