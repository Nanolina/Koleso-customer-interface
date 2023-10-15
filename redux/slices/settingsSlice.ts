import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    name: null,
    gender: null,
    phone: null,
    email: null,
    birthday: null,
  },
  reducers: {
    setValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetGender: (state) => {
      state.gender = null;
    },
  },
});

export default settingsSlice.reducer;
export const { setValue, resetGender } = settingsSlice.actions;
