import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { IEmailPayload } from '../modules/auth';
import {
  IChangeEmailData,
  ILoginData,
  IResendCodeData,
  ISetNewPasswordData,
  ISignupData,
  IVerifyCodeData,
} from './types/request';
import { AuthResponse, ISetNewPasswordResponse } from './types/response';

export class AuthService {
  static async signup(
    userData: ISignupData
  ): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/signup', userData);
  }

  static async login({
    email,
    password,
  }: ILoginData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/login', {
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return authServiceAPI.post('/logout');
  }

  // To check email in the DB and send a link "reset password" to email
  static async requestPasswordRecovery({
    email,
  }: IChangeEmailData): Promise<AxiosResponse<IEmailPayload>> {
    return authServiceAPI.post<IEmailPayload>('/passwords/recovery', {
      email,
    });
  }

  static async setNewPassword({
    password,
    repeatedPassword,
  }: ISetNewPasswordData): Promise<AxiosResponse<ISetNewPasswordResponse>> {
    return authServiceAPI.post<ISetNewPasswordResponse>('/passwords/set', {
      password,
      repeatedPassword,
    });
  }

  static async verifyCode({
    code,
    codeType,
    email,
  }: IVerifyCodeData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>(`/codes/${codeType}/verify`, {
      code,
      email,
    });
  }

  static async resendCode({
    codeType,
    email,
  }: IResendCodeData): Promise<AxiosResponse<IEmailPayload>> {
    return authServiceAPI.post<IEmailPayload>(`/codes/${codeType}/resend`, {
      email,
    });
  }
}
