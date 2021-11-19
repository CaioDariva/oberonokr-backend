import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsOptional()
  userId?: number[];

}
