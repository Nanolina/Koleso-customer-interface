import { createSlice } from '@reduxjs/toolkit';
import { myRequests } from '../../consts';

const returnSlice = createSlice({
  name: 'return',
  initialState: {
    request: myRequests,
  },
  reducers: {
    toggleReturn(state, action) {
      state.request = action.payload;
    },
  },
});

export default returnSlice.reducer;
export const { toggleReturn } = returnSlice.actions;
