import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllFeelingService } from './find-all-feeling.service';

@Controller('find-all-feeling')
@ApiTags('Felings')
export class FindAllFeelingController {
  constructor(private readonly service: FindAllFeelingService) {}
  @Get()
  public async handle() {
    return await this.service.execute();
  }
}
