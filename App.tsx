// App.tsx
/**
 * Main App Entry Point
 * FIXED: Proper MirageJS initialization
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

// ============================================
// APP COMPONENT
// ============================================

export default function App() {
  useEffect(() => {
    if (__DEV__) {
      // Import and start mock server
      const { makeServer } = require('./src/api/mocks/server');
      const server = makeServer();
      
      console.log('🔥 Mock API Server is running!');
      console.log('📡 Intercepting all API calls...');
      console.log('💡 Use any email from mock data to login');
      console.log('   Example: you@example.com');
      
      // Cleanup on unmount
      return () => {
        if (server) {
          server.shutdown();
          console.log('🛑 Mock server shut down');
        }
      };
    }
  }, []);

  return (
    <AuthProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </AuthProvider>
  );
}