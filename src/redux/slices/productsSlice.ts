import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IProductsState } from '../../modules/product';
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
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProductsState>) => {
    getAllProductsCases(builder);
    getProductByIdCases(builder);
  },
});

export default productsSlice.reducer;

export const { clearMessages } = productsSlice.actions;
