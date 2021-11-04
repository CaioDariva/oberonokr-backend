import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';

export class UpdateUserDto extends PartialType(CreateTeamDto) {}
