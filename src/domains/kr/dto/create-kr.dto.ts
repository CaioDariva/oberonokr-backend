import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateKeyresultDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsNumber()
  @IsOptional()
  feelingId?: number;

  @IsNumber()
  @IsOptional()
  okrId?: number;
}
