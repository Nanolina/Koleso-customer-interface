import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payment: 'Card',
    isModalOpen: true,
  },
  reducers: {
    togglePayment(state, action) {
      state.payment = action.payload;
    },
    toggleModal(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export default paymentSlice.reducer;
export const { togglePayment, toggleModal } = paymentSlice.actions;
