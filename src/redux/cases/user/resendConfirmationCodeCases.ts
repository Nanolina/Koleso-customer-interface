import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IUserState } from '../../../modules/auth';
import { handleResendConfirmationCode } from '../../thunks/user';

export const resendConfirmationCodeCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleResendConfirmationCode.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleResendConfirmationCode.fulfilled, (state) => {
      state.loading = false;
      state.success = 'The code was sent to your email';
    })
    .addCase(handleResendConfirmationCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to resend the code';
    });
};
