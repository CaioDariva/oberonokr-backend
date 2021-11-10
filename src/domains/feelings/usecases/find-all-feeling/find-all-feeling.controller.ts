import { Controller, Get } from '@nestjs/common';
import { FindAllFeelingService } from './find-all-feeling.service';

@Controller('find-all-feeling')
export class FindAllFeelingController {
  constructor(private readonly service: FindAllFeelingService) {}
  @Get()
  public async handle() {
    return await this.service.execute();
  }
}
