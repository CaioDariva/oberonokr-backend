import { UpdateFeelingDto } from './../../dto/update.feeling.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { request } from 'express';

@Injectable()
export class UpdateFeelingService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(reques: UpdateFeelingDto, id: number) {
    return await this.prisma.feeling.update({ where: { id }, data: request });
  }
}
