import { IsNotEmpty, IsString } from 'class-validator';
import { Keyresults } from '../entity/kr.entity';

export class CreateKeyresultDto extends Keyresults {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  date: Date;
}
