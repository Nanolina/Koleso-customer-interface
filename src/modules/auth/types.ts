import { LanguageType } from '../../types';

export interface IImageInputProps {
  name: string;
  placeholder: string;
  icon: JSX.Element;
  value: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
  inputMode?: string;
  onChangeText: (text: string) => void;
  onBlur: (text: string) => void;
  errors?: any;
  touched?: any;
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
  activationLinkId: string;
  isActive: boolean;
  isVerifiedEmail: boolean;
  roles: string[];
}
