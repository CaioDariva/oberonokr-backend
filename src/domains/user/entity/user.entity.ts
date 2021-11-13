import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  createAt?: string | Date;
  updateAt?: string | Date;
  OkrId?: number;
  keyresultsId?: number;
  Teams?: Prisma.UsersInTeamsUncheckedCreateNestedManyWithoutUsersInput;
}
