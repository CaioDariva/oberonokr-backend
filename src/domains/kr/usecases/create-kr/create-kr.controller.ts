import { Controller, Post, Body } from '@nestjs/common';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';
import { CreateKrService } from './create-kr.service';

@Controller('create-kr')
export class CreateKrController {
  constructor(private readonly service: CreateKrService) {}
  @Post()
  public async handle(@Body() request: CreateKeyresultDto) {
    return await this.service.execute(request);
  }
}
