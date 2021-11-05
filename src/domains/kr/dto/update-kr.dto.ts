import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyresultDto } from './create-kr.dto';

export class UpdateKeyresultDto extends PartialType(CreateKeyresultDto) {}
