import { Auth } from './auth.interface';

export interface User extends Auth {
  firstName: String;
  lastName: string;
}
