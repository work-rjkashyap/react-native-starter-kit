import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@components/Button';
import { styles, colors, typography } from '@utils/styles';
import { User } from '@types/index';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
};

const HomeScreen: React.FC = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={[styles.container, homeStyles.container]}>
      <Text style={homeStyles.title}>Welcome, {mockUser.name}</Text>
      <Text style={homeStyles.subtitle}>{mockUser.email}</Text>

      <View style={styles.shadow}>
        <Button title="Get Started" onPress={handlePress} />
      </View>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  title: {
    fontSize: typography.fontSizeXLarge,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.dark,
  },
  subtitle: {
    fontSize: typography.fontSizeNormal,
    color: colors.secondary,
    marginBottom: 24,
  },
});

export default HomeScreen;
