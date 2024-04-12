import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import {
  IUserState,
  IVerifyConfirmationCodePayload,
} from '../../../modules/auth';
import { handleVerifyConfirmationCode } from '../../thunks/user';

export const verifyConfirmationCodeCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleVerifyConfirmationCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleVerifyConfirmationCode.fulfilled,
      (state, action: PayloadAction<IVerifyConfirmationCodePayload>) => {
        state.isVerifiedEmail = action.payload.isVerifiedEmail;
        state.loading = false;
      }
    )
    .addCase(handleVerifyConfirmationCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to verify code';
    });
};
