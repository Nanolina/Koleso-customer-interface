import { IAuthPayload, IUserState } from '../../../modules/auth';

export interface AuthResponse {
  token: string;
  user: IUserState;
}

export interface ISetNewPasswordResponse {
  token: string;
  user: IAuthPayload;
}
