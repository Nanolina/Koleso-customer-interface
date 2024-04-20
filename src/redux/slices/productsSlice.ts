import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import {
  ColorType,
  IColorGroup,
  IProductsState,
  ISetSelectedProductSizePayload,
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
      state.product.colorPalette.selectedColor = action.payload;
    },
    setSelectedColorGroup: (state, action: PayloadAction<IColorGroup>) => {
      state.product.colorPalette.selectedColorGroup = action.payload;
    },
    setSelectedProductSize: (
      state,
      action: PayloadAction<ISetSelectedProductSizePayload>
    ) => {
      state.product.colorPalette.colorGroups =
        state.product.colorPalette.colorGroups.map((colorGroup) =>
          colorGroup.id === action.payload.colorGroupId
            ? { ...colorGroup, selectedSize: action.payload.size }
            : colorGroup
        );
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
  setSelectedColorGroup,
  setSelectedProductSize,
} = productsSlice.actions;
