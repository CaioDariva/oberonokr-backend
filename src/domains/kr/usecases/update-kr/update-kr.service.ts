import { Injectable } from '@nestjs/common';
import { Feeling } from 'src/domains/feelings/entity/feelings.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';

@Injectable()
export class UpdateKrService {
  constructor(private readonly prisma: PrismaService) {}

  public async updateOneKr(
    id: number,
    { userId, feelingId, okrId, ...rest }: UpdateKeyresultDto,
  ) {
    return await this.prisma.keyresults.update({
      where: { id },
      data: {
        user: { connect: { id: userId } },
        feeling: { connect: { id: feelingId } },
        okr: { connect: { id: okrId } },
        ...rest,
      },
    });
  }
}
