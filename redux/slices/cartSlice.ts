import { createSlice } from '@reduxjs/toolkit';
import { deliveryPoint } from './../../consts';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: deliveryPoint,
  },
  reducers: {
    toggleDelivery(state, action) {
      state.delivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery } = cartSlice.actions;
