import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';

@Injectable()
export class UpdateKrService {
  constructor(private readonly prisma: PrismaService) {}

  public async updateOneKr(
    id: number,
    { userId, feelingId, okrId, ...rest }: UpdateKeyresultDto,
  ) {
    return this.prisma.keyresults.update({
      where: { id },
      data: {
        ...rest,
        feeling: { connect: { id: feelingId } },
        user: { connect: { id: userId } },
        okr: { connect: { id: okrId } },
      },
    });
  }
}
