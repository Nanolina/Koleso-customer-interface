export interface IImageInputProps {
  placeholder: string;
  icon: JSX.Element;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoComplete?: string;
  inputMode?: string;
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
