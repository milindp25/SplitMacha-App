// src/screens/Home/HomeScreen.tsx
/**
 * Home Screen - FIXED for your theme
 * Uses: textLight (not textSecondary), base fontSize (not md)
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../theme';
import { useAuth } from '../../contexts/AuthContext';

// ============================================
// COMPONENT
// ============================================

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log('✅ Logged out successfully');
    } catch (error) {
      console.error('❌ Logout failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryLight]}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>💰 SplitMacha</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome back!</Text>
          <Text style={styles.welcomeName}>{user?.name}</Text>
          <Text style={styles.welcomeEmail}>{user?.email}</Text>
        </View>

        {/* Success Message */}
        <View style={styles.successCard}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successTitle}>Login Successful!</Text>
          <Text style={styles.successText}>
            Your authentication is working perfectly.
          </Text>
          <Text style={styles.successText}>
            Mock API is intercepting all requests.
          </Text>
        </View>

        {/* User Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Your Profile</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>User ID:</Text>
            <Text style={styles.infoValue}>{user?.id}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{user?.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>{user?.phone || 'Not set'}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Currency:</Text>
            <Text style={styles.infoValue}>{user?.preferredCurrency}</Text>
          </View>
        </View>

        {/* Coming Soon */}
        <View style={styles.comingSoonCard}>
          <Text style={styles.comingSoonTitle}>🚀 Coming Soon</Text>
          <Text style={styles.comingSoonItem}>• Balance Cards (You Owe / You're Owed)</Text>
          <Text style={styles.comingSoonItem}>• Groups List</Text>
          <Text style={styles.comingSoonItem}>• Add Expense (FAB)</Text>
          <Text style={styles.comingSoonItem}>• Recent Activity</Text>
          <Text style={styles.comingSoonItem}>• Friends List</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Text style={styles.logoutButtonText}>🚪 Logout</Text>
        </TouchableOpacity>

        {/* Dev Info */}
        {__DEV__ && (
          <View style={styles.devInfo}>
            <Text style={styles.devInfoTitle}>🛠️ Development Mode</Text>
            <Text style={styles.devInfoText}>✅ Mock API Server Running</Text>
            <Text style={styles.devInfoText}>✅ Auth Context Active</Text>
            <Text style={styles.devInfoText}>✅ TypeScript Enabled</Text>
            <Text style={styles.devInfoText}>
              📝 Check console for API logs
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// ============================================
// STYLES (FIXED for your theme)
// ============================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
  },
  headerTitle: {
    fontSize: theme.typography.fontSizes['2xl'],
    fontWeight: theme.typography.fontWeights.bold as any,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  welcomeTitle: {
    fontSize: theme.typography.fontSizes.lg,
    color: theme.colors.textLight,  // FIXED: was textSecondary
    marginBottom: theme.spacing.sm,
  },
  welcomeName: {
    fontSize: theme.typography.fontSizes['2xl'],
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  welcomeEmail: {
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.textLight,  // FIXED: was textSecondary
  },
  successCard: {
    backgroundColor: '#D1FAE5',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
  },
  successIcon: {
    fontSize: 48,
    marginBottom: theme.spacing.md,
  },
  successTitle: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: '#065F46',
    marginBottom: theme.spacing.sm,
  },
  successText: {
    fontSize: theme.typography.fontSizes.sm,
    color: '#047857',
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.md,
  },
  infoTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  infoLabel: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.textLight,  // FIXED: was textSecondary
    fontWeight: theme.typography.fontWeights.semibold as any,
  },
  infoValue: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.textPrimary,
  },
  comingSoonCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  comingSoonTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: '#92400E',
    marginBottom: theme.spacing.md,
  },
  comingSoonItem: {
    fontSize: theme.typography.fontSizes.sm,
    color: '#92400E',
    marginBottom: theme.spacing.xs,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold as any,
  },
  devInfo: {
    backgroundColor: '#DBEAFE',
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  devInfoTitle: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold as any,
    color: '#1E3A8A',
    marginBottom: theme.spacing.sm,
  },
  devInfoText: {
    fontSize: theme.typography.fontSizes.xs,
    color: '#1E40AF',
    marginBottom: theme.spacing.xs,
  },
});

export default HomeScreen;