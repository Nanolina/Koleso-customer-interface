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
  },
});

export default returnSlice.reducer;
export const { toggleReturns, toggleReturnWay, toggleReason } =
  returnSlice.actions;
