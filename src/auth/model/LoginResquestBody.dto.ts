import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  email: string;

  @IsString()
  @Length(4, 20)
  // 1 letra maiuscula, 1 numero e 1 caracter especial
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Escolha uma senha mais adequada',
  })
  password: string;
}
