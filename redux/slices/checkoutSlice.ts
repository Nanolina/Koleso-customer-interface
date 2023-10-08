import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    name: null,
    phone: null,
    city: null,
    street: null,
    house: null,
    apartment: null,
    day: null,
    time: null,
    note: null,
  },
  reducers: {
    addField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export default checkoutSlice.reducer;
export const { addField } = checkoutSlice.actions;
