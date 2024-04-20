import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from '../../../modules/product';
import { handleGetProductById } from '../../thunks/product';
import { getValuesForColorsWithImages } from './functions';

export const getProductByIdCases = (
  builder: ActionReducerMapBuilder<IProductsState>
) => {
  builder
    .addCase(handleGetProductById.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    })
    .addCase(
      handleGetProductById.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        const colorsWithImages = getValuesForColorsWithImages(
          action.payload.variants
        );

        state.loading = false;
        state.product = {
          colorsWithImages,
          ...action.payload,
        };
      }
    )
    .addCase(handleGetProductById.rejected, (state, action) => {
      state.loading = false;
      state.success = null;
      state.error = action.payload || 'Failed to get product by id';
    });
};
