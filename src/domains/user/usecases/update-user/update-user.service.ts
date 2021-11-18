import { UpdateUserDto } from './../../dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UpdateUserService {
  constructor(private readonly prisma: PrismaService) {}
  public async execute(id: number, { password, ...rest }: UpdateUserDto) {
    return await this.prisma.user.update({
      data: { ...rest, password: await bcrypt.hash(password, 10) },
      where: { id },
    });
  }
}
