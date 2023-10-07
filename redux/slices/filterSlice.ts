import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../src/modules/filter/data';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    colors: [],
    genders: [],
  },
  reducers: {
    // Colors
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

    // Genders
    toggleGender(state, action) {
      const genderIndex = state.genders.indexOf(action.payload);
      if (genderIndex === -1) {
        state.genders.push(action.payload);
      } else {
        state.genders.splice(genderIndex, 1);
      }
    },
    resetAllGenders(state) {
      state.genders = [];
    },
    selectAllGenders(state) {
      state.genders = data.genders;
    },
  },
});

export default filterSlice.reducer;
export const {
  toggleColor,
  resetAllColors,
  selectAllColors,
  toggleGender,
  resetAllGenders,
  selectAllGenders,
} = filterSlice.actions;
