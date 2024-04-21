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

export interface IProductTitleContainerProps {
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

export interface IColorPaletteState {
  colorGroups: IColorGroup[];
  selectedColor: ColorType | '';
  selectedColorGroup: IColorGroup;
}

export interface IProductState extends IProduct {
  colorPalette: IColorPaletteState;
}

export interface IProductsState {
  items: IProduct[];
  product: IProductState;
  success: string | null;
  loading: boolean;
  error: any;
}

export interface IImageContainerProps {
  image: string;
}

export interface IPropertiesProps {
  color: string;
  composition: string;
  gender: string;
}

export interface ITitleContainerProps {
  title: string;
  seller: string;
}

export interface IIconFeatherProps {
  name: any;
  style?: any;
}

export interface IColorGroup {
  id: string;
  color: ColorType | '';
  priceWithoutDiscount: number;
  finalPrice: number;
  articleKoleso: string;
  images: string[];
  selectedSize?: string;
  freeSizes?: string[];
  unavailableSizes?: string[];
  currentImageIndex: number;
}

export interface ISetSelectedProductSizePayload {
  size: string;
  colorGroupId: string;
}

export interface ISetCurrentImageIndexPayload {
  currentImageIndex: number;
  colorGroupId: string;
}

export interface IComposition {
  title: string;
  percentage: number;
}
