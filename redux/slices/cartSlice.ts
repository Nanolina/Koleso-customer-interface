import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { savedAddresses } from '../../mockData';
import { pickupPoint } from './../../consts';

interface IAddress {
  id: string;
  address: string;
}

export interface ICartState {
  delivery: string;
  addressDelivery: IAddress;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    delivery: pickupPoint,
    addressDelivery: savedAddresses[0],
  } as ICartState,
  reducers: {
    toggleDelivery(state, action: PayloadAction<string>) {
      state.delivery = action.payload;
    },
    setAddressDelivery(state, action: PayloadAction<IAddress>) {
      state.addressDelivery = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { toggleDelivery, setAddressDelivery } = cartSlice.actions;
