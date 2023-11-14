import { IItemProps } from '../../types';

export interface ICheckoutState {
  date: string;
  note: string;
}

export interface IOrderProcessingProps {
  item: IItemProps;
  isReturn: boolean;
}

export interface ITimePickerProps {
  text: string;
  value: string;
  onChange: (value: string) => void;
  width?: string;
}
