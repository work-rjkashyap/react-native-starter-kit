import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {typography} from '@utils/styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.container, disabled && buttonStyles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.fontSizeSmall,
  },
  disabled: {
    backgroundColor: '#cccccc',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Button;
