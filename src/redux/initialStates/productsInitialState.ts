import {
  IColorGroup,
  IColorPaletteState,
  IProductState,
  IProductsState,
  IStore,
} from '../../modules/product';

const storeInitialState: IStore = {
  id: '',
  name: '',
  organizationId: '',
};

export const selectedColorGroupState: IColorGroup = {
  id: '',
  color: '',
  images: [],
  priceWithoutDiscount: 0,
  finalPrice: 0,
  articleKoleso: '',
  currentImageIndex: 0,
};

export const colorPaletteState: IColorPaletteState = {
  colorGroups: [],
  selectedColor: '',
  selectedColorGroup: selectedColorGroupState,
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
  colorPalette: colorPaletteState,
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  loading: false,
  success: null,
  error: null,
};
