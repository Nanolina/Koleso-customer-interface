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
    resetValue: (state, action) => {
      const { key } = action.payload;
      state[key] = null;
    },
  },
});

export default settingsSlice.reducer;
export const { setValue, resetValue } = settingsSlice.actions;
