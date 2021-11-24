import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateKeyresultDto } from '../../dto/create-kr.dto';

@Injectable()
export class CreateKrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute({
    userId,
    feelingId,
    okrId,
    ...rest
  }: CreateKeyresultDto) {
    return await this.prisma.keyresults.create({
      data: {
        user: { connect: { id: userId } },
        feeling: { connect: { id: feelingId } },
        okr: { connect: { id: okrId } },
        ...rest,
      },
    });
  }
}
