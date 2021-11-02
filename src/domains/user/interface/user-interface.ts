import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUpdateUserService {
  id: number;
  UpdateUserDto: UpdateUserDto;
}

export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  update(updateUser: IUpdateUserService): Promise<User>;
  findById(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
}
