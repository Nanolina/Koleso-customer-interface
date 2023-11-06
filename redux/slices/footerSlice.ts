import { createSlice } from '@reduxjs/toolkit';

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    activeIcon: null,
  },
  reducers: {
    toggleActiveIcon(state, action) {
      state.activeIcon = action.payload;
    },
  },
});

export default footerSlice.reducer;
export const { toggleActiveIcon } = footerSlice.actions;
