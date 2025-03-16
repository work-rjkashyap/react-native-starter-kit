import { useTheme } from '@/context/ThemeProvider';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  const theme = useTheme();

  if (!theme) {
    return null;
  }

  const { colors, isDarkMode } = theme;
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.bg,
        },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  );
}

export default AppLayout;
