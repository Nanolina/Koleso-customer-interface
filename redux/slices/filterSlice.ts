import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../src/modules/filter/data';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    colors: [],
    genders: [],
    sizes: [],
    ageFrom: null,
    ageTo: null,
    priceFrom: null,
    priceTo: null,
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

    // Sizes
    toggleSize(state, action) {
      const sizeIndex = state.sizes.indexOf(action.payload);
      if (sizeIndex === -1) {
        state.sizes.push(action.payload);
      } else {
        state.sizes.splice(sizeIndex, 1);
      }
    },
    resetAllSizes(state) {
      state.sizes = [];
    },
    selectAllSizes(state) {
      state.sizes = data.sizes;
    },

    // Age
    addAgeFrom(state, action) {
      state.ageFrom = action.payload;
    },
    addAgeTo(state, action) {
      state.ageTo = action.payload;
    },

    // Price
    addPriceFrom(state, action) {
      state.priceFrom = action.payload;
    },
    addPriceTo(state, action) {
      state.priceTo = action.payload;
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
  toggleSize,
  resetAllSizes,
  selectAllSizes,
  addAgeFrom,
  addAgeTo,
  addPriceFrom,
  addPriceTo,
} = filterSlice.actions;
