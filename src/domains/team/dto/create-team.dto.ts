import { IsString, IsNotEmpty } from 'class-validator';
import { Team } from '../entity/team.entity';
export class CreateTeamDto extends Team {
  @IsString()
  @IsNotEmpty()
  name: string;
}
