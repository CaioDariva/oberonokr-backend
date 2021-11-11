import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOkrDto } from '../../dto/create-okr.dto';

@Injectable()
export class CreateOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateOkrDto) {
    return await this.prisma.okr.create({ data: request });
  }
}
