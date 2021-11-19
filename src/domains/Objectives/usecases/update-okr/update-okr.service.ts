import { UpdateOkrDto } from './../../dto/update-okr.dto';
import { PrismaService } from './../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateOkrService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number, { userId, ...rest }: UpdateOkrDto) {
    return await this.prisma.objective.update({
      where: { id },
      data: { ...rest, user: { connect: { id: userId } } },
    });
  }
}
