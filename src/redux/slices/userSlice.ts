import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import { loginCases, logoutCases, signupCases } from '../cases/user';
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
    loginCases(builder);
    logoutCases(builder);
  },
});

export default userSlice.reducer;

export const { clearMessages } = userSlice.actions;
