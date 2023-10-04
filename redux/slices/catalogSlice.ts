import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    section: null,
    category: null,
    subcategory: null,
  },
  reducers: {
    selectSection(state, action) {
      state.section = action.payload;
    },
    selectCategory(state, action) {
      state.category = action.payload;
    },
    selectSubcategory(state, action) {
      state.category = action.payload;
    },
  },
});

export default catalogSlice.reducer;
export const { selectSection, selectCategory, selectSubcategory } =
  catalogSlice.actions;
