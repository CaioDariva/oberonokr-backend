import { Body, Controller, Post } from '@nestjs/common';
import { CreateFeelingDto } from '../../dto/create.feeling.dto';
import { CreateFeelingService } from './create-feeling.service';

@Controller('create-feeling')
export class CreateFeelingController {
  constructor(private readonly service: CreateFeelingService) {}
  @Post()
  public async handle(@Body() request: CreateFeelingDto) {
    return await this.service.execute(request);
  }
}
