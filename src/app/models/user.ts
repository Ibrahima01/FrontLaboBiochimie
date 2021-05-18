import { ROLE } from './role.enum';

export class User {
  public id:number;
  public username: string;
  public password: string;
  public role: string;
  constructor( id: number, username: string, role: string, password: string) {
    this.id=id;
    this.username=username;
    this.password=password;
    this.role=role;
  }
}
