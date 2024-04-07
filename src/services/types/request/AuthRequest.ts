import { RoleType } from '../../../types';

export interface ISignupData {
  email: string;
  phone: string;
  password: string;
  repeatedPassword: string;
  role: RoleType;
}

export interface ILoginData {
  email: string;
  password: string;
}
