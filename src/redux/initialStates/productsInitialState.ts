import {
  IColorsWithImagesState,
  IImagesWith1Color,
  IProductState,
  IProductsState,
  IStore,
} from '../../modules/product';

const storeInitialState: IStore = {
  id: '',
  name: '',
  organizationId: '',
};

export const selectedImagesWith1ColorState: IImagesWith1Color = {
  id: '',
  color: '',
  images: [],
};

export const colorsWithImagesState: IColorsWithImagesState = {
  items: [],
  selectedColor: '',
  selectedImagesWith1Color: selectedImagesWith1ColorState,
};

export const productInitialState: IProductState = {
  id: '',
  userId: '',
  store: storeInitialState,
  name: '',
  description: '',
  brand: '',
  model: '',
  gender: undefined,
  sectionId: 0,
  categoryId: 0,
  subcategoryId: 0,
  composition: [],
  variants: [],
  colorsWithImages: colorsWithImagesState,
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  loading: false,
  success: null,
  error: null,
};
