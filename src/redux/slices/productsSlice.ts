import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import {
  ColorType,
  IImagesWith1Color,
  IProductsState,
} from '../../modules/product';
import { getAllProductsCases, getProductByIdCases } from '../cases/product';
import { productsInitialState } from '../initialStates';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
    setSelectedProductColor: (state, action: PayloadAction<ColorType>) => {
      state.product.colorsWithImages.selectedColor = action.payload;
    },
    setSelectedImagesWith1Color: (
      state,
      action: PayloadAction<IImagesWith1Color>
    ) => {
      state.product.colorsWithImages.selectedImagesWith1Color = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    getAllProductsCases(builder);
    getProductByIdCases(builder);
  },
});

export default productsSlice.reducer;

export const {
  clearMessages,
  setSelectedProductColor,
  setSelectedImagesWith1Color,
} = productsSlice.actions;
