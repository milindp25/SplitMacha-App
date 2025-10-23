/**
 * User API Repository - FIXED
 * All paths will be prefixed with /api/v1 by MirageJS namespace
 */

import apiClient from '../client';
import { User, CreateUserRequest, UpdateUserRequest } from '../../@types';

export const UserRepository = {
  /**
   * Get current user profile
   * GET /api/v1/users/me
   */
  getMe: async (): Promise<User> => {
    const response = await apiClient.get<User>('/api/v1/users/me');
    return response.data;
  },

  /**
   * Get user by ID
   * GET /api/v1/users/:id
   */
  getById: async (userId: string): Promise<User> => {
    const response = await apiClient.get<User>(`/api/v1/users/${userId}`);
    return response.data;
  },

  /**
   * Get user by email
   * GET /api/v1/users/email/:email
   */
  getByEmail: async (email: string): Promise<User> => {
    console.log('📞 UserRepository.getByEmail:', email);
    const response = await apiClient.get<User>(`/api/v1/users/email/${email}`);
    return response.data;
  },

  /**
   * Register new user (PUBLIC endpoint)
   * POST /api/v1/users
   */
  register: async (data: CreateUserRequest): Promise<User> => {
    console.log('📞 UserRepository.register:', data.email);
    const response = await apiClient.post<User>('/api/v1/users', data);
    return response.data;
  },

  /**
   * Update user profile
   * PUT /api/v1/users/:id
   */
  updateProfile: async (userId: string, data: UpdateUserRequest): Promise<User> => {
    const response = await apiClient.put<User>(`/api/v1/users/${userId}`, data);
    return response.data;
  },

  /**
   * Search users by name or email
   * GET /api/v1/users/search?q=query
   */
  searchUsers: async (query: string): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/api/v1/users/search', {
      params: { q: query },
    });
    return response.data;
  },

  /**
   * Get all active users
   * GET /api/v1/users
   */
  getAllActiveUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/api/v1/users');
    return response.data;
  },
};

export default UserRepository;