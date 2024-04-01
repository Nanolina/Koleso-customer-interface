import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { minDate } from '../../consts';

export interface ICheckoutState {
  name: string | null;
  phone: string | null;
  city: string | null;
  street: string | null;
  house: string | null;
  apartment: string | null;
  date: string; // ISO string for date
  note: string | null;
}

interface AddFieldPayload {
  field: keyof ICheckoutState;
  value: any; // `any` can be replaced with a more specific type depending on the field
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    name: null,
    phone: null,
    city: null,
    street: null,
    house: null,
    apartment: null,
    date: minDate.toISOString(),
    note: null,
  } as ICheckoutState,
  reducers: {
    addField(state, action: PayloadAction<AddFieldPayload>) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export default checkoutSlice.reducer;
export const { addField } = checkoutSlice.actions;
