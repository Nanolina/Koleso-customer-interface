import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPaymentState {
  payment: string;
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payment: 'Card',
  } as IPaymentState,
  reducers: {
    togglePayment(state, action: PayloadAction<string>) {
      state.payment = action.payload;
    },
  },
});

export default paymentSlice.reducer;
export const { togglePayment } = paymentSlice.actions;
