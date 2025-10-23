// src/api/client.ts
/**
 * API Client with Axios
 * FIXED: Correct baseURL for MirageJS
 */

import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL - MirageJS will add /api/v1 namespace
// IMPORTANT: Don't include /api/v1 here since MirageJS namespace handles it
const API_BASE_URL = __DEV__
  ? 'http://localhost:3000'
  : 'https://api.splitmacha.com';

// Storage keys
const AUTH_TOKEN_KEY = '@splitmacha_auth_token';
const USER_ID_KEY = '@splitmacha_user_id';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('🔧 API Client initialized with baseURL:', API_BASE_URL);

// ============================================
// REQUEST INTERCEPTOR
// ============================================

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      // Get token from storage
      const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
      
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Log request in development
      if (__DEV__) {
        console.log('🚀 API Request:', {
          method: config.method?.toUpperCase(),
          url: config.url,
          data: config.data,
        });
      }

      return config;
    } catch (error) {
      console.error('❌ Request interceptor error:', error);
      return config;
    }
  },
  (error: AxiosError) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// ============================================
// RESPONSE INTERCEPTOR
// ============================================

apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (__DEV__) {
      console.log('✅ API Response:', {
        url: response.config.url,
        status: response.status,
        data: response.data,
      });
    }

    return response;
  },
  async (error: AxiosError) => {
    // Log error in development
    if (__DEV__) {
      console.error('❌ API Error:', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      });
    }

    // Handle specific error cases
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          console.warn('⚠️ Unauthorized - clearing auth');
          await clearAuth();
          break;

        case 403:
          console.warn('⚠️ Forbidden access');
          break;

        case 404:
          console.warn('⚠️ Resource not found');
          break;

        case 500:
          console.error('❌ Server error');
          break;

        default:
          console.error('❌ Unknown error:', status);
      }
    } else if (error.request) {
      console.error('❌ Network error - no response received');
    } else {
      console.error('❌ Error:', error.message);
    }

    return Promise.reject(error);
  }
);

// ============================================
// AUTH HELPERS
// ============================================

export const saveAuth = async (token: string, userId: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    await AsyncStorage.setItem(USER_ID_KEY, userId);
    console.log('✅ Auth saved');
  } catch (error) {
    console.error('❌ Error saving auth:', error);
    throw error;
  }
};

export const getAuth = async (): Promise<{ token: string | null; userId: string | null }> => {
  try {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    const userId = await AsyncStorage.getItem(USER_ID_KEY);
    return { token, userId };
  } catch (error) {
    console.error('❌ Error getting auth:', error);
    return { token: null, userId: null };
  }
};

export const clearAuth = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    await AsyncStorage.removeItem(USER_ID_KEY);
    console.log('✅ Auth cleared');
  } catch (error) {
    console.error('❌ Error clearing auth:', error);
    throw error;
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getErrorMessage = (error: any): string => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export const isNetworkError = (error: any): boolean => {
  return !error.response && error.request;
};

export const isAuthError = (error: any): boolean => {
  return error.response?.status === 401;
};

export default apiClient;