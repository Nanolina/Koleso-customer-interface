export interface IDescriptionProps {
  description: string;
}

export interface IImageContainerProps {
  image: string;
}

export interface IPropertiesProps {
  color: string;
  composition: string;
  gender: string;
}

export interface ISizeContainerProps {
  possibleSizes: number[];
  missingSizes: number[];
}

export interface ITitleContainerProps {
  title: string;
  seller: string;
}

export interface IIconFeatherProps {
  name: any;
}

export interface IPropertyProps {
  label: string;
  text?: string | number;
}
