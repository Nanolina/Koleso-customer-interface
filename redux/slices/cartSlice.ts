import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: 'Self-delivery',
  },
  reducers: {
    toggleDelivery(state, action) {
      state.delivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery } = cartSlice.actions;
