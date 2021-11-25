import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';

@Injectable()
export class CreateKrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute({ userId, okrId, ...rest }: CreateKeyresultDto) {
    return await this.prisma.keyresults.create({
      data: {
        user: { connect: { id: userId } },
        okr: { connect: { id: okrId } },
        ...rest,
      },
    });
  }
}
