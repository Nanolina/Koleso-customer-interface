import { IItemProps } from '../../types';

export interface IReturnsProps {
  data: IItemProps[];
}

export interface IUpperTextProps {
  number: string;
  date: string;
  text: string;
}

export interface IBottomTextProps {
  statusMoney: string; // 'sent' | 'not_sent'
}

export interface IButtonRemovePhotoProps {
  onPress: () => void;
}

export interface IInfoProps {
  text: string;
  info: string;
}

export interface IPhotoProps {
  index: number;
}
