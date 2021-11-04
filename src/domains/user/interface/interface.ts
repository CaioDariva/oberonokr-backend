import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUpdateUserService {
  id: number;
  updateUserDto: UpdateUserDto;
}
