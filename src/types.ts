import { NavigationProp, RouteProp } from '@react-navigation/native';
import {
  ImageSourcePropType,
  InputModeOptions,
  TextStyle,
  ViewStyle,
} from 'react-native';

export enum LanguageType {
  English = 'English',
  Russian = 'Russian',
}

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
  image: any;
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

export interface IInfoItemProps {
  item: IItemProps;
  hasPadding?: boolean;
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
  image: ImageSourcePropType | string;
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

export interface ILabelWithInputProps {
  name: string;
  placeholder: string;
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  width?: string;
  onFocus?: () => void;
  inputMode?: InputModeOptions;
  maxLength?: number;
  secureTextEntry?: boolean;
  autoComplete?: string;
  errors?: any;
  touched?: any;
  onBlur: any;
  extra?: string;
}

export interface IBoxProps {
  label: string;
  onPress?: () => void;
  boxStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export interface IButtonProps {
  text?: any;
  onPress?: any;
  width?: string | number;
  backgroundColor?: string;
  border?: boolean;
  textColor?: string;
  isBold?: boolean;
  hasShadow?: boolean;
  extra?: string;
  navigation?: any;
  disabled?: boolean;
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

export interface CardItemProps {
  image: any;
  title: string;
  onPress: () => void;
  translationKey: string;
}

export interface IMessageBoxProps {
  errorMessage?: string;
  successMessage?: string;
  clearMessage: () => void;
}

export interface IValidationErrorProps {
  error: string | undefined;
}

// Types
export type OrderProcessingStackParamList = {
  PaymentPage: undefined;
  ReturnsPage: undefined;
  OrderProcessingPage: {
    screen: 'Return' | 'Checkout';
    params: {
      itemId: string;
    };
  };
};

export type OrderProcessingNavigationProp =
  NavigationProp<OrderProcessingStackParamList>;
export type OrderProcessingRouteProp = RouteProp<
  OrderProcessingStackParamList,
  'OrderProcessingPage'
>;

// Enums
export enum RoleType {
  Seller = 'Seller',
  Customer = 'Customer',
}

export enum ConfirmationCodeType {
  EMAIL_CONFIRMATION = 'EMAIL_CONFIRMATION',
  PHONE_CONFIRMATION = 'PHONE_CONFIRMATION',
  PASSWORD_RESET = 'PASSWORD_RESET',
}
