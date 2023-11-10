import { ImageSourcePropType } from 'react-native';
import { IItemProps } from '../../types';

export interface IPurchasesProps {
  data: IItemProps[];
}

export interface IImageContainerProps {
  image: ImageSourcePropType | string;
}
