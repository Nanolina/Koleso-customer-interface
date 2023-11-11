export interface IInputProps {
  title: string;
}

export type SettingsKey = 'gender' | 'language';

export interface ICheckboxListProps {
  title: string;
  items: string[];
  keyType: SettingsKey;
}

export interface IGetDataForInput {
  title: string;
  name: string;
  phone: string;
  email: string;
}
