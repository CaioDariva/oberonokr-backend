import { User } from '../entity/user.entity';
export class CreateUserDto extends User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}
