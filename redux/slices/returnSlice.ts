import { createSlice } from '@reduxjs/toolkit';
import { myRequests, selfReturn } from '../../consts';
import { minDate, reasonsForReturn } from '../../src/consts';

const returnSlice = createSlice({
  name: 'return',
  initialState: {
    // My Requests | Create a request
    returns: myRequests,

    // Self-return | Courier
    way: selfReturn,

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
  },
  reducers: {
    toggleReturns(state, action) {
      state.returns = action.payload;
    },
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
  toggleReturns,
  toggleReturnWay,
  toggleReason,
  addPhoto,
  removePhoto,
  addFieldReturn,
} = returnSlice.actions;
