import { Okr } from '../entity/okr.entity';

export class CreateOkrDto extends Okr {
  description: string;
  assignedBy: string;
}
