import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';
import {
  IUpdateUserService,
  IUserRepository,
} from '../interface/user-interface';

export class UserRepositoryInMemmory implements IUserRepository {
  private users: User[] = [];

  constructor() {
    this.users.push({
      id: 1,
      email: 'nest@gmail.com',
      name: 'nest',
      surname: 'test',
      password: 'senha',
      createAt: new Date(),
      updateAt: new Date(),
    });
  }

  public async create({ ...data }: CreateUserDto): Promise<User> {
    const newUser = {
      id: this.users.length + 1,
      ...data,
      createAt: new Date(),
      updateAt: new Date(),
    } as User;

    this.users.push(newUser);
    return newUser;
  }

  public async update({
    id,
    UpdateUserDto: { ...data },
  }: IUpdateUserService): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    const updateUser: User = {
      ...this.users[userIndex],
      ...data,
      updateAt: new Date(),
    };

    this.users[userIndex] = updateUser;
    return updateUser;
  }
  findById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
