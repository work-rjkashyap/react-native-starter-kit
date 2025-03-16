import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <div>Home</div>} />
      <Tab.Screen name="Settings" component={() => <div>Settings</div>} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
