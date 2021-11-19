import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOkrDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  assignedBy: string;

  @IsNumber()
  @IsOptional()
  userId?: number;
}
