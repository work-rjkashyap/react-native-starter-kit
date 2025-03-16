import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing, ViewStyle } from 'react-native';
import { darkColors } from '@/theme/tokens';
import { useTheme } from '@/context/ThemeProvider';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface ThemeTogglerProps {
  size?: number;
  animationDuration?: number;
  style?: ViewStyle;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  size = 60,
  animationDuration = 300,
  style,
}) => {
  // Get theme data and toggle function from context
  const theme = useTheme();

  if (!theme) {
    return null; // Return null if theme context is not available
  }

  const { colors, border, shadow, toggleTheme } = theme;
  const isDark = colors.bg === darkColors.bg;

  // Animation values
  const rotateAnim = React.useRef(new Animated.Value(isDark ? 1 : 0)).current;
  const translateAnim = React.useRef(new Animated.Value(isDark ? 1 : 0)).current;
  const scaleAnim = React.useRef(new Animated.Value(isDark ? 1 : 0)).current;
  const opacityAnim = React.useRef(new Animated.Value(isDark ? 0 : 1)).current;

  useEffect(() => {
    // Run animation when theme changes
    Animated.parallel([
      Animated.timing(rotateAnim, {
        toValue: isDark ? 1 : 0,
        duration: animationDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: isDark ? 1 : 0,
        duration: animationDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: isDark ? 1 : 0,
        duration: animationDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: isDark ? 0 : 1,
        duration: animationDuration,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [isDark]);

  // Interpolate animation values
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const translate = translateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, size / 2],
  });

  const scale = scaleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const containerSize = {
    width: size,
    height: size / 2,
    borderRadius: border.radius.full,
  };

  const toggleSize = {
    width: size * 0.4,
    height: size * 0.4,
    borderRadius: border.radius.full,
  };

  return (
    <TouchableOpacity
      activeOpacity={theme.interact.pressOpacity}
      onPress={toggleTheme}
      style={[
        styles.container,
        containerSize,
        {
          backgroundColor: isDark ? colors.surface : colors.bg,
          borderColor: colors.border,
          ...shadow.md,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.toggle,
          toggleSize,
          {
            transform: [{ translateX: translate }, { rotate }, { scale }],
            backgroundColor: isDark ? '#F5F3CE' : '#FFD700',
          },
        ]}
      >
        <Animated.View style={{ opacity: opacityAnim }}>
          <FeatherIcons name="sun" color={colors.text} size={size * 0.2} />
        </Animated.View>
        <Animated.View style={{ opacity: isDark ? 1 : 0, position: 'absolute' }}>
          <FeatherIcons name="moon" color={colors.primary} size={size * 0.2} />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
    borderWidth: 1,
  },
  toggle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default ThemeToggler;
