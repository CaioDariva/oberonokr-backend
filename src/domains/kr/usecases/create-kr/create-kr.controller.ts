import { Keyresults } from '.prisma/client';
import { Controller, Post, Body } from '@nestjs/common';
import { ControllerUseCases } from 'src/domains/controller-usecase.interface';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';
import { CreateKrService } from './create-kr.service';

@Controller('create-kr')
export class CreateKrController
  implements ControllerUseCases<CreateKeyresultDto, Keyresults>
{
  constructor(private readonly service: CreateKrService) {}
  @Post()
  public async handle(
    @Body() request: CreateKeyresultDto,
  ): Promise<Keyresults> {
    return await this.service.execute(request);
  }
}
