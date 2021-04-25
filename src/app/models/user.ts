import { ROLE } from './role.enum';

export class User {
  constructor(public username: string, public role: ROLE) {}
}
