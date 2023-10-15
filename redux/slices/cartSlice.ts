import { createSlice } from '@reduxjs/toolkit';
import { selfDelivery } from './../../consts';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: selfDelivery,
  },
  reducers: {
    toggleDelivery(state, action) {
      state.delivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery } = cartSlice.actions;
