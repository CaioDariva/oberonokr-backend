import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateFeelingDto } from '../../dto/create.feeling.dto';

@Injectable()
export class CreateFeelingService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(request: CreateFeelingDto) {
    return this.prisma.feeling.create({ data: request });
  }
}
