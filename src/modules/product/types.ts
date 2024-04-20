export enum ColorType {
  Aquamarine = 'Aquamarine',
  Beige = 'Beige',
  Black = 'Black',
  Blue = 'Blue',
  Brown = 'Brown',
  Cherry = 'Cherry',
  Cream = 'Cream',
  Emerald = 'Emerald',
  Fuchsia = 'Fuchsia',
  Golden = 'Golden',
  Green = 'Green',
  Grey = 'Grey',
  LightBlue = 'LightBlue',
  Lilac = 'Lilac',
  Maroon = 'Maroon',
  Olive = 'Olive',
  Orange = 'Orange',
  Pink = 'Pink',
  Purple = 'Purple',
  Raspberry = 'Raspberry',
  Red = 'Red',
  Sandy = 'Sandy',
  Silver = 'Silver',
  Turquoise = 'Turquoise',
  White = 'White',
  Yellow = 'Yellow',
  Transparent = 'Transparent',
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

export interface IColorsWithImagesState {
  items: IImagesWith1Color[];
  selectedColor: ColorType | '';
  selectedImagesWith1Color: IImagesWith1Color;
}

export interface IProductState extends IProduct {
  colorsWithImages: IColorsWithImagesState;
}

export interface IProductsState {
  items: IProduct[];
  product: IProductState;
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

export interface IImagesWith1Color {
  id: string;
  color: ColorType | '';
  images: string[];
}
