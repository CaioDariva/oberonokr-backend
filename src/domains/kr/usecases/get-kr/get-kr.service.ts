import { Keyresults } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GetKrService {
  constructor(private db: PrismaService) {}

  async findUnique(id: number): Promise<Keyresults> {
    const kr = await this.db.keyresults.findUnique({ where: { id } });

    return kr;
  }
}
