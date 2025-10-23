/**
 * Authentication Context - FIXED
 * Uses POST /api/v1/auth/login (not GET by email)
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginCredentials } from '../@types';
import { AuthRepository } from '../api/repositories/AuthRepository';
import { saveAuth, getAuth, clearAuth, getErrorMessage } from '../api/client';

// ============================================
// TYPES
// ============================================

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: { name: string; email: string; password: string; phone?: string }) => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

// ============================================
// CONTEXT
// ============================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================
// PROVIDER
// ============================================

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  /**
   * Check authentication on app start
   */
  const checkAuth = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { token, userId } = await getAuth();

      if (token && userId) {
        // For now, just create a mock user object
        // In production, you'd fetch user data from /users/me
        setUser({
          id: userId,
          name: 'Cached User',
          email: 'user@cached.com',
          firebaseUid: 'cached',
          isActive: true,
          preferredCurrency: 'INR',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        console.log('✅ User authenticated from cache');
      } else {
        console.log('ℹ️ No auth token found');
      }
    } catch (err) {
      console.error('❌ Auth check failed:', err);
      await clearAuth();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Login with email and password
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      console.log('🔐 Logging in:', credentials.email);

      // Call auth/login endpoint
      const response = await AuthRepository.login(credentials);

      // Save auth
      await saveAuth(response.token, response.user.id);

      // Update state
      setUser(response.user);

      console.log('✅ Login successful:', response.user.email);
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      console.error('❌ Login failed:', message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register new user
   */
  const register = async (data: {
    name: string;
    email: string;
    password: string;
    phone?: string;
  }): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      console.log('📝 Registering user:', data.email);

      // Call auth/register endpoint
      const response = await AuthRepository.register(data);

      // Save auth
      await saveAuth(response.token, response.user.id);

      // Update state
      setUser(response.user);

      console.log('✅ Registration successful:', response.user.email);
    } catch (err) {
      const message = getErrorMessage(err);
      setError(message);
      console.error('❌ Registration failed:', message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout user
   */
  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      
      console.log('👋 Logging out');

      await AuthRepository.logout();
      await clearAuth();

      setUser(null);
      setError(null);

      console.log('✅ Logout successful');
    } catch (err) {
      console.error('❌ Logout failed:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Refresh user data
   */
  const refreshUser = async (): Promise<void> => {
    try {
      if (!user) return;
      
      // In production, fetch from /users/me
      console.log('🔄 User refresh not implemented yet');
    } catch (err) {
      console.error('❌ Refresh failed:', err);
      throw err;
    }
  };

  /**
   * Clear error message
   */
  const clearError = (): void => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
    register,
    refreshUser,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ============================================
// HOOK
// ============================================

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

export default AuthContext;