import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payment: 'Card',
  },
  reducers: {
    togglePayment(state, action) {
      state.payment = action.payload;
    },
  },
});

export default paymentSlice.reducer;
export const { togglePayment } = paymentSlice.actions;
