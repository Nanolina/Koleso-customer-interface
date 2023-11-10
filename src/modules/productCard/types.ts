import { ImageSourcePropType } from 'react-native';

export interface IImageContainerProps {
  image: ImageSourcePropType | string;
}

export interface IIconContainerProps {
  name: string;
  type: 'top' | 'bottom';
}

export interface IIconProductCardProps {
  name: string;
}

export interface ITitleContainerProps {
  seller: string;
  title: string;
}
