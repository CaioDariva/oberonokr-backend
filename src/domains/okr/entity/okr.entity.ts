import { Prisma } from '.prisma/client';

export class Okr implements Prisma.OkrUncheckedCreateInput {
  id?: number;
  description: string;
  assignedAt?: string | Date;
  assignedBy: string;
}
