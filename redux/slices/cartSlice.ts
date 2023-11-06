import { createSlice } from '@reduxjs/toolkit';
import { savedAddresses } from '../../mockData';
import { pickupPoint } from './../../consts';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: pickupPoint,
    addressDelivery: savedAddresses[0],
  },
  reducers: {
    toggleDelivery(state, action) {
      state.delivery = action.payload;
    },
    setAddressDelivery(state, action) {
      state.addressDelivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery, setAddressDelivery } = cartSlice.actions;
