import { createSlice } from '@reduxjs/toolkit';
import { myRequests, selfReturn } from '../../consts';

const returnSlice = createSlice({
  name: 'return',
  initialState: {
    // My Requests | Create a request
    returns: myRequests,

    // Self-return | Courier
    way: selfReturn,
  },
  reducers: {
    toggleReturns(state, action) {
      state.returns = action.payload;
    },
    toggleReturnWay(state, action) {
      state.way = action.payload;
    },
  },
});

export default returnSlice.reducer;
export const { toggleReturns, toggleReturnWay } = returnSlice.actions;
