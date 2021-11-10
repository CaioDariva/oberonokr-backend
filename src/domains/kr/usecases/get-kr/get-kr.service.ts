import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetKrService {
  constructor(private readonly db: PrismaService) {}
  public async execute(id: number) {
    return this.db.keyresults.findUnique({ where: { id } });
  }
}
