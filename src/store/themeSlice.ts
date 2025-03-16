import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';

const initialState = {
  isDarkMode: useColorScheme() === 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
