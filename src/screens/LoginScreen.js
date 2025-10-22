import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../theme';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section with Gradient */}
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryLight]}
        style={styles.topSection}
      >
        <Text style={styles.emoji}>💰</Text>
        <Text style={styles.appName}>SplitMacha</Text>
        <Text style={styles.tagline}>
          Split bills with friends, Bangalore style
        </Text>
      </LinearGradient>

      {/* White Card Section */}
      <View style={styles.cardSection}>
        {/* Google Sign In */}
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.7}
        >
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleButtonText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Apple Sign In (iOS) */}
        <TouchableOpacity
          style={styles.appleButton}
          activeOpacity={0.7}
        >
          <Text style={styles.appleIcon}></Text>
          <Text style={styles.appleButtonText}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Email Button */}
        <TouchableOpacity
          style={styles.emailButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('EmailLogin')}
        >
          <Text style={styles.emailButtonText}>
            Continue with Email
          </Text>
        </TouchableOpacity>

        {/* Terms Text */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  topSection: {
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
  },
  emoji: {
    fontSize: 80,
    marginBottom: theme.spacing.md,
  },
  appName: {
    fontSize: theme.typography.fontSizes['5xl'],
    fontWeight: theme.typography.fontWeights.bold,
    color: '#FFFFFF',
    marginBottom: theme.spacing.sm,
  },
  tagline: {
    fontSize: theme.typography.fontSizes.base,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  cardSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: theme.borderRadius['3xl'],
    borderTopRightRadius: theme.borderRadius['3xl'],
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  googleIcon: {
    fontSize: 24,
    marginRight: theme.spacing.sm,
    fontWeight: theme.typography.fontWeights.bold,
    color: '#4285F4',
  },
  googleButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.textPrimary,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  appleIcon: {
    fontSize: 24,
    marginRight: theme.spacing.sm,
    color: '#FFFFFF',
  },
  appleButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: '#FFFFFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  dividerText: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.textLight,
    marginHorizontal: theme.spacing.md,
    fontWeight: theme.typography.fontWeights.medium,
  },
  emailButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  emailButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: '#FFFFFF',
  },
  termsText: {
    fontSize: theme.typography.fontSizes.xs,
    color: theme.colors.textLight,
    textAlign: 'center',
    marginTop: theme.spacing.lg,
  },
  termsLink: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    fontWeight: theme.typography.fontWeights.medium,
  },
});

export default LoginScreen;
