export interface IWebCardWrapperProps {
  cardWidth: number;
  children: React.ReactNode;
}

interface IReturnProps {
  number: string;
  date: string;
}

export interface IItemProps {
  id: string;
  image: string;
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
  return?: IReturnProps;
}

export interface IRowProps {
  title: string;
  navigateTo: string;
  items?: string[] | number[];
  selectedItems?: string[];
  selectedItem?: string | null;
}
