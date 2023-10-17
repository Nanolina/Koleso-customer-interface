import { createSlice } from '@reduxjs/toolkit';
import { minDate } from '../../src/consts';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    name: null,
    phone: null,
    city: null,
    street: null,
    house: null,
    apartment: null,
    date: minDate.toISOString(),
    time: { label: 'Anytime', value: 'Anytime' },
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
