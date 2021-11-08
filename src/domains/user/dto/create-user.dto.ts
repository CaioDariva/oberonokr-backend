import { IsEmail, IsEmpty, IsString, Matches } from 'class-validator';
import { User } from '../entity/user.entity';
export class CreateUserDto extends User {
  @IsString()
  @IsEmpty()
  name: string;

  @IsString()
  @IsEmpty()
  surname: string;

  @IsEmail()
  @IsString()
  @IsEmpty()
  email: string;

  @IsString()
  @IsEmpty({})
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, {
    message: 'insira uma senha mais segura',
  })
  password: string;
}
