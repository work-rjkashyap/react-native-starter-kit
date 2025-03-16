import { ThemeProvider } from '@/context/ThemeProvider';
import AppLayout from '@/layout/AppLayout';
import RootNavigation from '@/navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';
import DrawerNavigation from '@/navigation/DrawerNavigation';
import { enableScreens } from 'react-native-screens';
enableScreens();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppLayout>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
