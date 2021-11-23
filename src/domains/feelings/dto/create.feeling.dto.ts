import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Feeling } from '../entity/feelings.entity';

export class CreateFeelingDto extends Feeling {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Paulo Salvatore',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  name: string;
}
