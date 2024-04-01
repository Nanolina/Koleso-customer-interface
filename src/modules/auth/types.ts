import { LanguageType } from '../../types';

export interface IImageInputProps {
  placeholder: string;
  icon: JSX.Element;
  value: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
  inputMode?: string;
  onChangeText: (text: string) => void;
  onBlur: (text: string) => void;
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
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  isSeller: boolean;
  language: LanguageType;
  organizationId: string;
  success: string;
  loading: boolean;
  error: any;
}
