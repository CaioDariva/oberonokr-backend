import { IsString, IsEmpty } from 'class-validator';
import { Team } from '../entity/team.entity';
export class CreateTeamDto extends Team {
  @IsString()
  @IsEmpty()
  name: string;
}
