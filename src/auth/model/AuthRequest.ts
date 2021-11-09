import { Request } from 'express';
import { User } from 'src/domains/user/entity/user.entity';

export interface AuthRequest extends Request {
  principal: User;
}
