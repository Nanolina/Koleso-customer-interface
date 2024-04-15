import { AUTH_SERVICE_URL, PRODUCT_SERVICE_URL } from '@env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { AuthResponse } from '../services/types/response';

const productServiceAPI = axios.create({
  withCredentials: true,
  baseURL: PRODUCT_SERVICE_URL,
});

productServiceAPI.interceptors.request.use(
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

productServiceAPI.interceptors.response.use(
  function (config) {
    return config;
  },
  async function (error) {
    try {
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        const response = await axios.get<AuthResponse>(
          `${AUTH_SERVICE_URL}/refresh`,
          {
            withCredentials: true,
          }
        );

        await SecureStore.setItemAsync('token', response.data.token);
        return productServiceAPI.request(originalRequest);
      }
    } catch (error) {
      console.error('NOT AUTHORIZED', error);
    }

    return Promise.reject(error);
  }
);

export { productServiceAPI };
