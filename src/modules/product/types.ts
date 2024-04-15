export enum ColorType {
  Aquamarine,
  Beige,
  Black,
  Blue,
  Brown,
  Cherry,
  Cream,
  Emerald,
  Fuchsia,
  Golden,
  Green,
  Grey,
  LightBlue,
  Lilac,
  Maroon,
  Olive,
  Orange,
  Pink,
  Purple,
  Raspberry,
  Red,
  Sandy,
  Silver,
  Turquoise,
  White,
  Yellow,
  Transparent,
}

export enum GenderType {
  Male,
  Female,
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

export interface IStore {
  id: string;
  name: string;
  organizationId: string;
}

export interface IComposition {
  title: string;
  percentage: number;
}

export interface IImage {
  url: string;
}

export interface IVariant {
  id: string;
  articleKoleso: string;
  productId: string;
  images: IImage[];
  color: ColorType;
  quantity: number;
  size?: string;
  priceWithoutDiscount: number;
  finalPrice: number;
  articleSupplier?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: string;
  userId: string;
  store: IStore;
  name: string;
  description?: string;
  brand?: string;
  model?: string;
  gender?: GenderType | '';
  sectionId: number;
  categoryId?: number;
  subcategoryId?: number;
  composition?: IComposition[];
  variants: IVariant[];
}

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  success: string | null;
  loading: boolean;
  error: any;
}

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
