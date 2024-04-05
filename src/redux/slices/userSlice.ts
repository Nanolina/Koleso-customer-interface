import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import { signupCases } from '../cases/user';
import { userInitialState } from '../initialStates';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
    signupCases(builder);
  },
});

export default userSlice.reducer;

export const { clearMessages } = userSlice.actions;
