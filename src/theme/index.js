// SplitMacha Theme - Bangalore Inspired Design System

const theme = {
  // Colors
  colors: {
    // Primary Colors (Bangalore sunsets)
    primary: '#FF6B35',
    primaryLight: '#FF8C61',
    primaryDark: '#E55A2B',

    // Secondary Colors (Tech city vibe)
    secondary: '#004E89',
    secondaryLight: '#0067B8',
    secondaryDark: '#003D6B',

    // Accent Colors
    accent: '#F7B801', // Marigold/Jasmine
    success: '#06A77D', // Garden City
    error: '#E74C3C',
    warning: '#F39C12',

    // Neutral Colors
    background: '#FAFAFA',
    cardBackground: '#FFFFFF',
    textPrimary: '#2D3436',
    textLight: '#636E72',
    textLighter: '#95A5A6',
    border: '#E8E8E8',
    borderLight: '#F3F4F6',

    // Category Colors
    general: '#95A5A6',
    food: '#FF6B35',
    transport: '#3498DB',
    entertainment: '#9B59B6',
    shopping: '#E74C3C',
    home: '#27AE60',
    travel: '#F39C12',
    gifts: '#E91E63',

    // Status Colors
    owe: '#E74C3C',
    owed: '#06A77D',
    settled: '#95A5A6',
  },

  // Typography
  typography: {
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 42,
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },

  // Spacing Scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  // Border Radius
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    full: 9999,
  },

  // Shadow Levels
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 12,
    },
  },
};

export default theme;
