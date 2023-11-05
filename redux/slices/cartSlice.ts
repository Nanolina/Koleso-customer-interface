import { createSlice } from '@reduxjs/toolkit';
import { pickupPoint } from './../../consts';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: pickupPoint,
  },
  reducers: {
    toggleDelivery(state, action) {
      state.delivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery } = cartSlice.actions;
