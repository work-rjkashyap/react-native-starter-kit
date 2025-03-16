import { TextStyle } from 'react-native';

// Define specific types for each theme token
interface FontSizeLineHeight {
  fontSize: number;
  lineHeight: number;
  fontWeight?: TextStyle['fontWeight']; // Use React Native's TextStyle fontWeight type
  letterSpacing?: number;
  fontFamily?: string;
}

interface FontDefinition {
  family: string;
  medium: string;
  semiBold: string;
  bold: string;
  h1: FontSizeLineHeight;
  h2: FontSizeLineHeight;
  h3: FontSizeLineHeight;
  body: FontSizeLineHeight;
  bodySm: FontSizeLineHeight;
  caption: FontSizeLineHeight;
  button: {
    fontSize: number;
    fontWeight: TextStyle['fontWeight'];
  };
}

interface BorderDefinition {
  width: {
    thin: number;
    medium: number;
    thick: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
}

// Match React Native's shadow properties
interface ShadowStyle {
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

interface ShadowDefinition {
  sm: ShadowStyle;
  md: ShadowStyle;
  lg: ShadowStyle;
  xl: ShadowStyle;
}

interface InteractDefinition {
  pressOpacity: number;
  pressScale: number;
  focus: string;
  disabled: number;
  hoverOpacity: number;
  activeScale: number;
}

interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  bg: string;
  surface: string;
  border: string;
  text: string;
  textLight: string;
  disabled: string;
}

interface SpaceDefinition {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

// Define the shape of the theme context with specific types
export interface ThemeContextType {
  isDarkMode: boolean;
  colors: ColorPalette;
  space: SpaceDefinition;
  font: FontDefinition;
  border: BorderDefinition;
  shadow: ShadowDefinition;
  interact: InteractDefinition;
  toggleTheme: () => void;
}

// Export types for reuse
export type {
  FontSizeLineHeight,
  FontDefinition,
  BorderDefinition,
  ShadowStyle,
  ShadowDefinition,
  InteractDefinition,
  ColorPalette,
  SpaceDefinition,
};
