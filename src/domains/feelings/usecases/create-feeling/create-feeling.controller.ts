import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeelingDto } from '../../dto/create.feeling.dto';
import { CreateFeelingService } from './create-feeling.service';

@Controller('create-feeling')
@ApiTags('Felings')
export class CreateFeelingController {
  constructor(private readonly service: CreateFeelingService) {}
  public async handle(request: CreateFeelingDto) {
    return await this.service.execute(request);
  }
}
