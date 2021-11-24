import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOkrDto } from '../../dto/create-okr.dto';
import { CreateOkrService } from './create-okr.service';

@Controller('create-okr')
@ApiTags('Objectives')
export class CreateOkrController {
  constructor(private readonly service: CreateOkrService) {}
  @Post()
  public async handle(@Body() request: CreateOkrDto) {
    return this.service.execute(request);
  }
}
