import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../src/modules/filter';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    colors: [],
  },
  reducers: {
    toggleColor(state, action) {
      const colorIndex = state.colors.indexOf(action.payload);
      if (colorIndex === -1) {
        state.colors.push(action.payload);
      } else {
        state.colors.splice(colorIndex, 1);
      }
    },
    resetAllColors(state) {
      state.colors = [];
    },
    selectAllColors(state) {
      state.colors = data.colors;
    },
  },
});

export default filterSlice.reducer;
export const { toggleColor, resetAllColors, selectAllColors } =
  filterSlice.actions;
