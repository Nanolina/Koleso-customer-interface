import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pickupPoint } from '../../../consts';
import { savedAddresses } from '../../../mockData';
import { IAddress } from '../../modules/address';

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
