import { UpdateFeelingDto } from './../../dto/update.feeling.dto';
import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateFeelingService } from './update-feeling.service';

@Controller('update-feeling')
export class UpdateFeelingController {
  constructor(private readonly service: UpdateFeelingService) {}
  @Patch(':id')
  public async handle(
    @Body() request: UpdateFeelingDto,
    @Param('id') id: string,
  ) {
    return await this.service.execute(request, +id);
  }
}
