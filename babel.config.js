module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@types': './src/types',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
