import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../modules/auth';
import {
  checkAuthCases,
  loginCases,
  logoutCases,
  requestPasswordRecoveryCases,
  resendConfirmationCodeCases,
  setNewPasswordCases,
  signupCases,
  verifyConfirmationCodeCases,
} from '../cases/user';
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
    requestPasswordRecoveryCases(builder);
    setNewPasswordCases(builder);
    verifyConfirmationCodeCases(builder);
    checkAuthCases(builder);
    resendConfirmationCodeCases(builder);
  },
});

export default userSlice.reducer;

export const { clearMessages } = userSlice.actions;
