import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';

@Injectable()
export class CreateKrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateKeyresultDto) {
    return await this.prisma.keyresults.create({ data: request });
  }
}
