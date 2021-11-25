import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateKeyresultDto } from '../../dto/update-kr.dto';

@Injectable()
export class UpdateKrService {
  constructor(private readonly prisma: PrismaService) {}

  public async updateOneKr(
    id: number,
    { userId, okrId, ...rest }: UpdateKeyresultDto,
  ) {
    return await this.prisma.keyresults.update({
      where: { id },
      data: {
        user: { connect: { id: userId } },
        okr: { connect: { id: okrId } },
        ...rest,
      },
    });
  }
}
