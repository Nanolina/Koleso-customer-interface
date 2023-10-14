import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    name: null,
    gender: null,
    phone: null,
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
    addPhone(state, action) {
      state.phone = action.payload;
    },
  },
});

export default settingsSlice.reducer;
export const { addName, addGender, resetGender, addPhone } =
  settingsSlice.actions;
