import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    gender: null,
  },
  reducers: {
    addGender(state, action) {
      state.gender = action.payload;
    },
    resetGender(state) {
      state.gender = null;
    },
  },
});

export default settingsSlice.reducer;
export const { addGender, resetGender } = settingsSlice.actions;
