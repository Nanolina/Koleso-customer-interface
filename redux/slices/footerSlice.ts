import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFooterState {
  activeIcon: string | null;
}

const footerSlice = createSlice({
  name: 'footer',
  initialState: {
    activeIcon: null,
  } as IFooterState,
  reducers: {
    toggleActiveIcon(state, action: PayloadAction<string | null>) {
      state.activeIcon = action.payload;
    },
  },
});

export default footerSlice.reducer;
export const { toggleActiveIcon } = footerSlice.actions;
