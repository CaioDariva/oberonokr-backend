import { Prisma } from '.prisma/client';

export class Keyresults implements Prisma.KeyresultsUncheckedCreateInput {
  id: number;
  name: string;
  description: string;
  status: boolean;
  date: Date;
  createAt: Date;
  updateAt: Date;
}
