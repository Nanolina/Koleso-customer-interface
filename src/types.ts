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

export interface IDatePickerProps {
  text?: string;
  value: string;
  onChange: (date: Date) => void;
  width?: string;
  validRange: {
    startDate?: Date;
    endDate?: Date;
  };
}

export interface IFooterState {
  footer: {
    activeIcon: string;
  };
}

export interface IHeaderProps {
  title?: string;
  hasButtonBack?: boolean;
  showFilterSort?: boolean;
  showSearchBar?: boolean;
  isEnabledSearch?: boolean;
  setIsEnabledSearch?: (isEnabled: boolean) => void;
}

export interface IButtonsGroupProps {
  options: Array<{ value: string; text: string }>;
  currentState: string;
  toggleFunction: Function;
  slice: string;
}

export interface IButtonsGroupState {
  [key: string]: any;
}

export interface IImageContainerProps {
  image: string;
}


export interface ISearchBarProps {
  isEnabledSearch: boolean;
  setIsEnabledSearch: (isEnabled: boolean) => void;
}

export interface ISearchState {
  search: {
    text: string;
  };
}

export interface ITextWithInputProps {
  text: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: string;
  onFocus?: () => void;
  inputMode?: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
}
