import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  users: number[];
}
