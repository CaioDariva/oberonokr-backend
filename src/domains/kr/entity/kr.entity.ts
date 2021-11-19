import { Prisma } from '.prisma/client';

export class Keyresults implements Prisma.KeyresultsUncheckedCreateInput {
  id?: number;
  name: string;
  description: string;
  status?: boolean;
  feelingId?: number;
  date: string;
  createAt?: string | Date;
  updateAt?: string | Date;
  UserId?: number;
  OkrId?: number;
}
