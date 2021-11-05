import { Controller } from '@nestjs/common';
import { FindAllOkrService } from './find-all-okr.service';

@Controller('find-all-okr')
export class FindAllOkrController {
  constructor(private readonly service: FindAllOkrService) {}
  public async handle() {
    return await this.service.execute();
  }
}
