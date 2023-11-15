import { IItemProps } from '../../types';

export interface ISelectedItemsState {
  [key: string]: boolean;
}

export interface ICartItemProps {
  item: IItemProps;
  isSelected: boolean;
  toggleItemSelection: () => void;
}

export interface ICartItemsProps {
  items: IItemProps[];
  selectedItems: { [key: string]: boolean };
  toggleItemSelection: (id: string) => void;
}

export interface IQuantityProps {
  quantity: number;
}

export interface IDetailProps {
  name: string;
  detail: string | number;
}

export interface ISignProps {
  type: string;
}
