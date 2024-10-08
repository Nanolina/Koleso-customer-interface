import { AUTH_SERVICE_URL } from '@env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { AuthResponse } from '../services/types/response';

const authServiceAPI = axios.create({
  withCredentials: true,
  baseURL: AUTH_SERVICE_URL,
});

authServiceAPI.interceptors.request.use(
  async function (config) {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

authServiceAPI.interceptors.response.use(
  function (config) {
    return config;
  },
  async function (error) {
    try {
      const originalRequest = error.config;
      if (
        error.response?.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        const response = await axios.get<AuthResponse>(
          `${AUTH_SERVICE_URL}/auth/refresh`,
          {
            withCredentials: true,
          }
        );

        await SecureStore.setItemAsync('token', response.data.token);
        return authServiceAPI.request(originalRequest);
      }
    } catch (error) {
      console.error('NOT AUTHORIZED', error);
    }

    return Promise.reject(error);
  }
);

export { authServiceAPI };
