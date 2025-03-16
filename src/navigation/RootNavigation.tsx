import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './AppNavigation';

function RootNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
