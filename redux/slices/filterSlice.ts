import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export default filterSlice.reducer;
export const { toggleColor } = filterSlice.actions;
