import { createSlice } from '@reduxjs/toolkit';
import { pickupPoint } from '../../../consts';
import { minDate, reasonsForReturn } from '../../consts';

interface ITime {
  label: string;
  value: string;
}

export interface IReturnState {
  way: string;
  reason: string;
  photos: string[];
  comment: string;
  name: string | null;
  phone: string | null;
  city: string | null;
  street: string | null;
  house: string | null;
  apartment: string | null;
  date: string;
  time: ITime;
  note: string | null;
}

const returnSlice = createSlice({
  name: 'return',
  initialState: {
    // pick-up Point-return | Courier
    way: pickupPoint,

    // "Didn't fit" | 'Bad quality' | 'Warranty case']
    reason: reasonsForReturn[0],
    photos: [],
    comment: '',
    name: null,
    phone: null,
    city: null,
    street: null,
    house: null,
    apartment: null,
    date: minDate.toISOString(),
    time: { label: 'Anytime', value: 'Anytime' },
    note: null,
  } as IReturnState,
  reducers: {
    toggleReturnWay(state, action) {
      state.way = action.payload;
    },
    toggleReason(state, action) {
      state.reason = action.payload;
    },
    addPhoto(state, action) {
      state.photos = [action.payload, ...state.photos].slice(0, 5);
    },
    removePhoto(state, action) {
      state.photos.splice(action.payload, 1);
    },
    addFieldReturn(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export default returnSlice.reducer;
export const {
  toggleReturnWay,
  toggleReason,
  addPhoto,
  removePhoto,
  addFieldReturn,
} = returnSlice.actions;
