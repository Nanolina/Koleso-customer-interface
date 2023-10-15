import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    phone: null,
    email: null,
  },
  reducers: {
    setValueAuth: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export default authSlice.reducer;
export const { setValueAuth } = authSlice.actions;
