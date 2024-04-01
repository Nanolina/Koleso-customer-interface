import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  name: string | null;
  phone: string | null;
  email: string | null;
}

interface ISetValueAuthPayload {
  key: keyof IAuthState;
  value: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    phone: null,
    email: null,
  } as IAuthState,
  reducers: {
    setValueAuth: (state, action: PayloadAction<ISetValueAuthPayload>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export default authSlice.reducer;
export const { setValueAuth } = authSlice.actions;
