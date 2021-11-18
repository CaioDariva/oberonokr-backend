import { Prisma } from '.prisma/client';

export class Team implements Prisma.TeamUncheckedCreateInput {
  id?: number;
  name: string;
  createAt?: string | Date;
  updateAt?: string | Date;
}
