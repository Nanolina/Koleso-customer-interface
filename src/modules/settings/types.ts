export interface ISettingsState {
  name: string;
  gender: string;
  phone: string;
  email: string;
  birthday: string;
}

export interface IInputProps {
  title: string;
}

export interface ICheckboxListProps {
  items: string[];
}

export interface IGetDataForInput {
  title: string;
  name: string;
  phone: string;
  email: string;
}
