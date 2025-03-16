import CustomDrawerContent from '@/components/SideBar/CustomDrawerContent';
import { useTheme } from '@/context/ThemeProvider';
import HomeScreen from '@/screens/HomeScreen';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu05Icon } from '@hugeicons/core-free-icons';

// Define Drawer Param List
type DrawerParamList = {
  Home: undefined;
};

// Create Drawer Navigator
const Drawer = createDrawerNavigator<DrawerParamList>();

// Type for Custom Drawer Toggle Button Props
type CustomDrawerToggleProps = {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
};

// Custom Drawer Toggle Button
const CustomDrawerToggle: React.FC<CustomDrawerToggleProps> = ({ navigation }) => {
  const theme = useTheme();
  if (!theme) return null;

  const { colors } = theme;

  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{ marginLeft: 10, marginRight: 10 }}
    >
      <HugeiconsIcon icon={Menu05Icon} size={25} color={colors.text} strokeWidth={1.5} />
    </TouchableOpacity>
  );
};

// Main Drawer Navigation Component
const DrawerNavigation: React.FC = () => {
  const theme = useTheme();
  if (!theme) return null;

  const { colors, font } = theme;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => <CustomDrawerToggle navigation={navigation} />, // ✅ Correctly typed
        drawerType: 'slide',
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.bg,
        },
        headerTintColor: colors.text,
        headerTitleStyle: font.h2,
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
