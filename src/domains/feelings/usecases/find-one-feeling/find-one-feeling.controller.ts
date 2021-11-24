import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindOneFeelingService } from './find-one-feeling.service';

@Controller('find-one-feeling/:id')
@ApiTags('Felings')
export class FindOneFeelingController {
  constructor(private readonly service: FindOneFeelingService) {}
  @Get()
  public async handle(@Param('id') id: string) {
    return await this.service.execute(+id);
  }
}
