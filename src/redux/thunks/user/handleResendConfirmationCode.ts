import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { ConfirmationCodeType } from '../../../types';
import { handleAsyncThunkError } from '../../functions';

export const handleResendConfirmationCode = createAsyncThunk(
  'user/resend-confirmation-code',
  async (codeType: ConfirmationCodeType, { rejectWithValue }) => {
    try {
      const response = await AuthService.resendConfirmationCode(codeType);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
