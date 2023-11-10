import { ImageSourcePropType } from 'react-native';

export interface IWebCardWrapperProps {
  cardWidth: number;
  children: React.ReactNode;
}

interface ILogisticsProps {
  number: string;
  date: string;
  statusMoney?: string;
}

export interface IItemProps {
  id: string;
  image: ImageSourcePropType | string;
  price: number;
  oldPrice: number;
  seller: string;
  title: string;
  color: string;
  gender: string;
  quantity: number;
  description?: string;
  composition?: string;
  selectedSize?: number;
  possibleSizes?: number[];
  missingSizes?: number[];
  return?: ILogisticsProps;
  delivery?: ILogisticsProps;
}

export interface IRowProps {
  title: string;
  navigateTo: string;
  items?: string[] | number[];
  selectedItems?: string[];
  selectedItem?: string | null;
}
