import { UpdateOkrDto } from './../../dto/update-okr.dto';
import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number, request: UpdateOkrDto) {
    return await this.prisma.okr.update({ where: { id }, data: request });
  }
}
