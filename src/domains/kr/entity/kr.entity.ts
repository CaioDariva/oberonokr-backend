import { Prisma } from '.prisma/client';

export class Keyresults implements Prisma.KeyresultsUncheckedCreateInput {
  id?: number;
  name: string;
  description: string;
  startEnd: string;
  deadLine: string;
  createAt?: string | Date;
  updateAt?: string | Date;
  userId?: number;
  okrId?: number;
}
