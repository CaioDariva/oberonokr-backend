import { IsString, IsEmpty } from 'class-validator';
import { Okr } from '../entity/okr.entity';

export class CreateOkrDto extends Okr {
  @IsString()
  @IsEmpty()
  description: string;

  @IsString()
  @IsEmpty()
  assignedBy: string;
}
