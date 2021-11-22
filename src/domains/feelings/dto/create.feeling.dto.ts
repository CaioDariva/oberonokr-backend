import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeelingDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
