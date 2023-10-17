import { createSlice } from '@reduxjs/toolkit';
import { myRequests, selfReturn } from '../../consts';
import { reasonsForReturn } from '../../src/consts';

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
  },
});

export default returnSlice.reducer;
export const {
  toggleReturns,
  toggleReturnWay,
  toggleReason,
  addPhoto,
  removePhoto,
} = returnSlice.actions;
