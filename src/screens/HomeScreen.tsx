import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import { useTheme } from '@/context/ThemeProvider';

const HomeScreen: React.FC = () => {
  const theme = useTheme();

  if (!theme) {
    return null;
  }

  const { colors, space, font, isDarkMode } = theme;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.bg,
          padding: space.lg,
        },
      ]}
    >
      <Text style={[font.h2, { color: colors.text }]}>Dark Mode</Text>

      <View style={[styles.section, { marginTop: space.lg }]}>
        <Text style={[font.body, { color: colors.text }]}>Dark Mode</Text>

        <ThemeToggler size={60} style={{ marginTop: space.md }} />

        <Text
          style={[
            font.caption,
            {
              color: colors.textLight,
              marginTop: space.sm,
            },
          ]}
        >
          {isDarkMode ? 'Enabled' : 'Disabled'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    borderRadius: 8,
    alignItems: 'flex-start',
  },
});

export default HomeScreen;
