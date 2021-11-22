import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellphone: string;
  createAt?: string | Date;
  updateAt?: string | Date;
  Okrs?: Prisma.ObjectiveUncheckedCreateNestedManyWithoutUserInput;
  keyResults?: Prisma.KeyresultsUncheckedCreateNestedManyWithoutUserInput;
}
