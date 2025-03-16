import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
