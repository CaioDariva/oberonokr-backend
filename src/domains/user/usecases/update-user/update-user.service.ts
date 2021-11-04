import { UpdateUserDto } from './../../dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number, Dto: UpdateUserDto) {
    return await this.prisma.user.update({ where: { id }, data: Dto });
  }
}
