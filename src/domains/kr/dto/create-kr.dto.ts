import { Keyresults } from '../entity/kr.entity';

export class CreateKeyresultDto extends Keyresults {
  name: string;
  description: string;
  date: Date;
}
