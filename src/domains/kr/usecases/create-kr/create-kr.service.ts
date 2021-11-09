import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ServiceUseCase } from 'src/domains/service-usecase.interface';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';
import { Keyresults } from '.prisma/client';

@Injectable()
export class CreateKrService
  implements ServiceUseCase<CreateKeyresultDto, Keyresults>
{
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateKeyresultDto): Promise<Keyresults> {
    return await this.prisma.keyresults.create({ data: request });
  }
}
