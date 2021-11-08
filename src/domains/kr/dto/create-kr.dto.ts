import { IsString } from 'class-validator';
import { Keyresults } from '../entity/kr.entity';
export class CreateKeyresultDto extends Keyresults {
  @IsString()
  name: string;
  @IsString()
  description: string;
  //date: Date;
}
