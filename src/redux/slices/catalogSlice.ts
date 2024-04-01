import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICatalogItemType,
  ICategoryType,
  ISectionType,
} from '../../modules/catalog';

export interface ICatalogState {
  section: ISectionType | null;
  category: ICategoryType | null;
  subcategory: ICatalogItemType | null;
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    section: null,
    category: null,
    subcategory: null,
  } as ICatalogState,
  reducers: {
    selectSection(state, action: PayloadAction<ISectionType>) {
      state.section = action.payload;
    },
    selectCategory(state, action: PayloadAction<ICategoryType>) {
      state.category = action.payload;
    },
    selectSubcategory(state, action: PayloadAction<ICatalogItemType>) {
      state.subcategory = action.payload;
    },
  },
});

export default catalogSlice.reducer;
export const { selectSection, selectCategory, selectSubcategory } =
  catalogSlice.actions;
