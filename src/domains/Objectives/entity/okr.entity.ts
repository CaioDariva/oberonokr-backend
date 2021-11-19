import { Prisma } from '.prisma/client';

export class Okr implements Prisma.ObjectiveUncheckedCreateInput {
  id?: number;
  description: string;
  assignedAt?: string | Date;
  assignedBy: string;
  userId?: number;
  krs?: Prisma.KeyresultsUncheckedCreateNestedManyWithoutOkrInput;
}
