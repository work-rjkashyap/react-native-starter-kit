export const lightColors = {
  primary: '#1E88E5', // Slightly more vibrant blue
  secondary: '#BA68C8',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',
  bg: '#FAFAFA',
  surface: '#FFFFFF',
  border: '#BDBDBD',
  text: '#212121',
  textLight: '#757575',
  disabled: '#9E9E9E',
};

export const darkColors = {
  primary: '#90CAF9',
  secondary: '#CE93D8',
  success: '#81C784',
  warning: '#FFD54F',
  error: '#E57373',
  info: '#64B5F6',
  bg: '#121212',
  surface: '#222222', // Slightly higher contrast with background
  border: '#424242',
  text: '#FFFFFF',
  textLight: '#BDBDBD',
  disabled: '#616161',
};

export const space = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 40,
  xxxl: 64, // Added for major section spacing
};

export const font = {
  family: 'SpaceGrotesk-Regular',
  medium: 'SpaceGrotesk-Medium', // Added medium weight
  semiBold: 'SpaceGrotesk-SemiBold', // Added semi-bold weight
  bold: 'SpaceGrotesk-Bold',
  h1: {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.25,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  bodySm: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2, // Slightly looser for small text
    fontFamily: 'SpaceGrotesk-Regular',
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
  },
};

export const border = {
  width: {
    thin: 1,
    medium: 2,
    thick: 4,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16, // Increased from 12
    xl: 24, // Added for more dramatic rounding
    full: 9999, // Changed from 50 to ensure full rounding regardless of size
  },
};

export const shadow = {
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Added for Android
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Added for Android
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // Added for Android
  },
  xl: {
    // Added extra large shadow
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
  },
};

export const interact = {
  pressOpacity: 0.7,
  pressScale: 0.97, // Less aggressive scale (0.97 vs 0.95)
  focus: lightColors.primary,
  disabled: 0.5,
  hoverOpacity: 0.9, // Added hover state
  activeScale: 0.99, // Added active state
};
