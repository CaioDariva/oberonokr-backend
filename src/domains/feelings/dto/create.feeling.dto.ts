import { IsNotEmpty, IsString } from 'class-validator';
import { Feeling } from '../entity/feelings.entity';

export class CreateFeelingDto extends Feeling {
  @IsString()
  @IsNotEmpty()
  name: string;
}
