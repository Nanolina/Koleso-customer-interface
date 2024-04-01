import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { ISignupData } from './types/request';
import { AuthResponse } from './types/response';

export class AuthService {
  static async signup(
    userData: ISignupData
  ): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/signup', userData);
  }
}
