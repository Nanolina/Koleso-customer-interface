import { AxiosResponse } from 'axios';
import { authServiceAPI } from '../http';
import { IVerifyConfirmationCodePayload } from '../modules/auth';
import { ConfirmationCodeType } from '../types';
import {
  IChangeEmailData,
  ILoginData,
  ISetNewPasswordDataForService,
  ISignupData,
  IVerifyConfirmationCodeData,
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
  }: IChangeEmailData): Promise<AxiosResponse<AuthResponse>> {
    return authServiceAPI.post<AuthResponse>('/password/recovery', {
      email,
    });
  }

  static async setNewPassword({
    userId,
    password,
    repeatedPassword,
  }: ISetNewPasswordDataForService): Promise<
    AxiosResponse<ISetNewPasswordResponse>
  > {
    return authServiceAPI.post<ISetNewPasswordResponse>(
      `/password/set/${userId}`,
      {
        password,
        repeatedPassword,
      }
    );
  }

  static async verifyConfirmationCode(
    codeData: IVerifyConfirmationCodeData
  ): Promise<AxiosResponse<IVerifyConfirmationCodePayload>> {
    return authServiceAPI.post<IVerifyConfirmationCodePayload>(
      '/verify-confirmation-code',
      codeData
    );
  }

  static async resendConfirmationCode(
    codeType: ConfirmationCodeType
  ): Promise<AxiosResponse<void>> {
    return authServiceAPI.get<void>(`/resend/${codeType}`);
  }
}
