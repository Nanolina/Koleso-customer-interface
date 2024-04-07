import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { AuthService } from '../../../services';
import { handleAsyncThunkError } from '../../functions';

export const handleLogout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Submit a request
      await AuthService.logout();

      // Reset access token from the storage
      await SecureStore.deleteItemAsync('token');
    } catch (error: any) {
      return handleAsyncThunkError(error, rejectWithValue);
    }
  }
);
