import { Prisma } from '.prisma/client';

export class Feeling implements Prisma.FeelingUncheckedCreateInput {
  id?: number;
  name: string;
  createAt?: string | Date;
  updateAt?: string | Date;
  keyresults?: Prisma.KeyresultsUncheckedCreateNestedManyWithoutFeelingInput;
}
