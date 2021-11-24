import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  @ApiProperty({
    example: 'usuario@email.com',
    description: `Ele será utilizado para logar na conta correta do usuario.`})
  email: string;

  @IsString()
  @Length(4, 20)
  // 1 letra maiuscula, 1 numero e 1 caracter especial
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Escolha uma senha mais adequada',
  })
  @ApiProperty({
    example: '@Senhaforte?123',
    description: `Será utilizado para validar o usuario.`,
  })
  password: string;
}
