import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IVerifyConfirmationCodeData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleVerifyConfirmationCode = createAsyncThunk(
  'user/verify-confirmation-code',
  async (codeData: IVerifyConfirmationCodeData, { rejectWithValue }) => {
    try {
      const response = await AuthService.verifyConfirmationCode(codeData);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
