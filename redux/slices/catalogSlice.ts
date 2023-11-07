import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISection {
  id: string;
  title: string;
  image: number;
  categories?: ICategory[];
}

interface ICategory {
  id: string;
  title: string;
  image: number;
  subcategories?: ISubcategory[];
}

interface ISubcategory {
  id: string;
  title: string;
  image: number;
}

export interface ICatalogState {
  section: ISection | null;
  category: ICategory | null;
  subcategory: ISubcategory | null;
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    section: null,
    category: null,
    subcategory: null,
  } as ICatalogState,
  reducers: {
    selectSection(state, action: PayloadAction<ISection>) {
      state.section = action.payload;
    },
    selectCategory(state, action: PayloadAction<ICategory>) {
      state.category = action.payload;
    },
    selectSubcategory(state, action: PayloadAction<ISubcategory>) {
      state.subcategory = action.payload;
    },
  },
});

export default catalogSlice.reducer;
export const { selectSection, selectCategory, selectSubcategory } =
  catalogSlice.actions;
