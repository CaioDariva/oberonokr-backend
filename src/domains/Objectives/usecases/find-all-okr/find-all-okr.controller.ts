import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllOkrService } from './find-all-okr.service';

@Controller('find-all')
@ApiTags('Objectives')
export class FindAllOkrController {
  constructor(private readonly service: FindAllOkrService) {}
  @Get()
  public async handle() {
    return await this.service.execute();
  }
}
