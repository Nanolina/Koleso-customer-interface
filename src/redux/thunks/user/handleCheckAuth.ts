import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { AuthResponse } from '../../../services/types/response';
import { handleAsyncThunkError } from '../../functions';

const API_URL = process.env.AUTH_SERVICE_URL;

export const handleCheckAuth = createAsyncThunk(
  'user/check-auth',
  async (_, { rejectWithValue }) => {
    try {
      // Submit a request
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

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
