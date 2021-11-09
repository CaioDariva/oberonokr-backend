import { IsString, IsNotEmpty } from 'class-validator';
import { Okr } from '../entity/okr.entity';

export class CreateOkrDto extends Okr {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  assignedBy: string;
}
