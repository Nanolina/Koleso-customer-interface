import { IProduct, IProductsState, IStore } from '../../modules/product';

const storeInitialState: IStore = {
  id: '',
  name: '',
  organizationId: '',
};
export const productInitialState: IProduct = {
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
};

export const productsInitialState: IProductsState = {
  items: [],
  product: productInitialState,
  loading: false,
  success: null,
  error: null,
};
