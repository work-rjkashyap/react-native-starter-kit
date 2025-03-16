import { RootState } from '@/store';
import { toggleTheme } from '@/store/themeSlice';
import { border, darkColors, font, interact, lightColors, shadow, space } from '@/theme/tokens';
import {
  BorderDefinition,
  ColorPalette,
  FontDefinition,
  InteractDefinition,
  ShadowDefinition,
  SpaceDefinition,
} from '@/theme/types';
import React, { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Define the shape of the theme context with specific types
interface ThemeContextType {
  isDarkMode: boolean;
  colors: ColorPalette;
  space: SpaceDefinition;
  font: FontDefinition;
  border: BorderDefinition;
  shadow: ShadowDefinition;
  interact: InteractDefinition;
  toggleTheme: () => void;
}

// Create a context with the defined type
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const theme = {
    isDarkMode,
    colors: isDarkMode ? darkColors : lightColors,
    space,
    font,
    border,
    shadow,
    interact,
    toggleTheme: () => dispatch(toggleTheme()),
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
