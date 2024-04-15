import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleRequestPasswordRecovery = createAsyncThunk(
  'user/password/recovery',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      const response = await AuthService.requestPasswordRecovery(userData);
      return response.data;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
