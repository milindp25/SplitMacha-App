/**
 * Authentication API Repository
 * Handles login, register, logout
 */

import apiClient from '../client';
import { User, LoginCredentials } from '../../@types';

interface AuthResponse {
  user: User;
  token: string;
  message: string;
}

export const AuthRepository = {
  /**
   * Login with email and password
   * POST /api/v1/auth/login
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    console.log('📞 AuthRepository.login:', credentials.email);
    const response = await apiClient.post<AuthResponse>('/api/v1/auth/login', {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  },

  /**
   * Register new user
   * POST /api/v1/auth/register
   */
  register: async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }): Promise<AuthResponse> => {
    console.log('📞 AuthRepository.register:', data.email);
    const response = await apiClient.post<AuthResponse>('/api/v1/auth/register', data);
    return response.data;
  },

  /**
   * Logout (just a placeholder, actual logout is clearing local storage)
   */
  logout: async (): Promise<void> => {
    console.log('📞 AuthRepository.logout');
    // In a real app, you might call an endpoint to invalidate the token
    // For now, we just clear local storage in AuthContext
  },
};

export default AuthRepository;