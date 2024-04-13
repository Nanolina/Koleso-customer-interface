import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { AuthService } from '../../../services';
import { IChangeEmailData } from '../../../services/types/request';
import { handleAsyncThunkError } from '../../functions';

export const handleRequestPasswordRecovery = createAsyncThunk(
  'user/password/recovery',
  async (userData: IChangeEmailData, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await AuthService.requestPasswordRecovery(userData);

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
