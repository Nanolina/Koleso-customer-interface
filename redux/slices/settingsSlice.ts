import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISettingsState {
  name: string | null;
  gender: string | null;
  phone: string | null;
  email: string | null;
  birthday: string | null;
}

interface ISetValuePayload {
  key: keyof ISettingsState;
  value: any;
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    name: null,
    gender: null,
    phone: null,
    email: null,
    birthday: null,
  } as ISettingsState,
  reducers: {
    setValue: (state, action: PayloadAction<ISetValuePayload>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetValue: (state, action) => {
      const { key } = action.payload;
      state[key] = null;
    },
  },
});

export default settingsSlice.reducer;
export const { setValue, resetValue } = settingsSlice.actions;
