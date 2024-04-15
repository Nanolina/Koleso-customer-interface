import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { AuthService } from '../../../services';
import { IVerifyCodeData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleVerifyCode = createAsyncThunk(
  'user/code/verify',
  async (codeData: IVerifyCodeData, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await AuthService.verifyCode(codeData);

      // Get data from response
      const { token, user } = response.data;

      // Set access token to the storage
      await SecureStore.setItemAsync('token', token);

      // Return data to be saved in store
      return user;
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
