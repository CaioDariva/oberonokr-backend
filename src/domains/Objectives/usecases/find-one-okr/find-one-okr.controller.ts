import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindOneOkrService } from './find-one-okr.service';

@Controller('find-one/:id')
@ApiTags('Objectives')
export class FindOneOkrController {
  constructor(private readonly service: FindOneOkrService) {}
  @Get()
  public async handle(@Param('id') id: number) {
    return await this.service.execute(+id);
  }
}
