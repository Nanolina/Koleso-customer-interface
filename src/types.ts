import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { ImageSourcePropType, TextStyle, ViewStyle } from 'react-native';

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
  displayTitle: string;
  navigateTo: string;
  items?: string[] | number[];
  selectedItems?: string[] | number[];
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
  text?: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: string;
  onFocus?: () => void;
  inputMode?: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
}

export interface IBoxProps {
  label: string;
  onPress?: () => void;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export interface IButtonProps {
  text?: any;
  onPress?: () => void;
  width?: string | number;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  hasShadow?: boolean;
  extra?: string;
  navigation?: NavigationProp<ParamListBase>;
}

export interface IButtonBackProps {
  navigation: any;
  onPress?: () => void;
  width?: number;
}

export interface ICentralContainerProps {
  isPadding?: boolean;
  isMinPadding?: boolean;
  children: React.ReactNode;
}

export interface ICheckboxItemProps {
  text?: string;
  isSelected?: boolean;
  onToggle: () => void;
  styleText?: object;
}

export interface IIconProps {
  name: any;
}

export interface IIconFooterProps extends IIconProps {
  active: boolean;
}

export interface INoteProps {
  title?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

// Types
export type OrderProcessingStackParamList = {
  PaymentPage: undefined;
  ReturnsPage: undefined;
  OrderProcessingPage: {
    title: string;
    item: IItemProps;
  };
};

export type OrderProcessingNavigationProp =
  NavigationProp<OrderProcessingStackParamList>;
export type OrderProcessingRouteProp = RouteProp<
  OrderProcessingStackParamList,
  'OrderProcessingPage'
>;
