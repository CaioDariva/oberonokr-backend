import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeelingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Paulo Salvatore',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  name: string;
}
