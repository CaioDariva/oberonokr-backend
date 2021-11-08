import { IsEmpty, IsString } from 'class-validator';
import { Keyresults } from '../entity/kr.entity';

export class CreateKeyresultDto extends Keyresults {
  @IsString()
  @IsEmpty()
  name: string;

  @IsString()
  @IsEmpty()
  description: string;

  @IsString()
  @IsEmpty()
  date: Date;
}
