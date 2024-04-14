import { InputModeOptions } from 'react-native';
import { LanguageType, RoleType } from '../../types';

export interface IImageInputProps {
  name: string;
  placeholder: string;
  icon: JSX.Element;
  value: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
  inputMode?: InputModeOptions;
  maxLength?: number;
  onChangeText: (text: string) => void;
  errors?: any;
  touched?: any;
  onBlur: any;
}

interface IRegistrationMethod {
  id: string;
  text: string;
  image: number; // Using only local images via require
  redirectPage: string;
}

export interface IRegistrationMethodProps {
  registrationMethod: IRegistrationMethod;
}

export interface IUserState {
  id: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isCustomer: boolean;
  language: LanguageType;
  organizationId: string;
  success: string;
  loading: boolean;
  error: any;
}

export interface IAuthPayload {
  id: string;
  email: string;
  phone: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  role: RoleType;
}

export interface IVerifyCodePayload {
  isVerifiedEmail: boolean;
}

export interface ITimerTextProps {
  timer: number;
}
