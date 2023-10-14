import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    name: null,
    gender: null,
  },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },
    addGender(state, action) {
      state.gender = action.payload;
    },
    resetGender(state) {
      state.gender = null;
    },
  },
});

export default settingsSlice.reducer;
export const { addName, addGender, resetGender } = settingsSlice.actions;
