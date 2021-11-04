import { Prisma } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  createAt: Date;
  updateAt: Date;
}
