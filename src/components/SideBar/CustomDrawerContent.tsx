import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import { useTheme } from '@/context/ThemeProvider';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Home09Icon, Logout01Icon } from '@hugeicons/core-free-icons';
import { font } from '@/theme/tokens';

const ModernDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const theme = useTheme();
  if (!theme) {
    return null;
  }

  const { colors, font } = theme;
  const [activeSection, setActiveSection] = useState('Home');

  // Navigation helper function
  const navigateToScreen = (screenName: string) => {
    setActiveSection(screenName);
    props.navigation.navigate(screenName as never);
  };

  const menuItem = [
    {
      label: 'Home',
      icon: Home09Icon,
      screen: 'Home',
      onPress: () => navigateToScreen('Home'),
    },
    {
      label: 'Settings',
      icon: '📊',
      screen: 'Settings',
      onPress: () => navigateToScreen,
    },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,

        backgroundColor: colors.bg,
      }}
      scrollEnabled={false}
    >
      <View style={[styles.container, { backgroundColor: colors.bg }]}>
        {/* Navigation Items */}
        <View style={styles.navigationContainer}>
          {/* Custom Navigation Items */}
          {['Home'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.navItem,
                activeSection === item && { backgroundColor: `${colors.primary}20` }, // 20% opacity
              ]}
              onPress={() => navigateToScreen(item)}
            >
              <View
                style={[
                  styles.navIconContainer,
                  { backgroundColor: activeSection === item ? colors.primary : colors.surface },
                ]}
              >
                <Text style={{ color: activeSection === item ? colors.primary : colors.text }}>
                  {item === 'Home' ? (
                    <HugeiconsIcon icon={Home09Icon} size={20} color={colors.surface} />
                  ) : (
                    '📊'
                  )}
                </Text>
              </View>
              <Text
                style={[
                  styles.navText,
                  {
                    color: activeSection === item ? colors.primary : colors.text,
                    ...font.body,

                    fontFamily: font.bold,
                  },
                ]}
              >
                {item}
              </Text>
              {activeSection === item && (
                <View style={[styles.activeIndicator, { backgroundColor: colors.primary }]} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        {/* Divider */}
        <View
          style={{
            height: 1,
            backgroundColor: colors.border,
            marginHorizontal: 12,
            marginVertical: 20,
          }}
        />

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.logoutButton]}
            onPress={() => {
              /* Handle logout */
            }}
          >
            <View
              style={[
                styles.navIconContainer,
                { backgroundColor: `${colors.error}20`, borderRadius: 30 },
              ]}
            >
              <HugeiconsIcon icon={Logout01Icon} size={20} color={colors.error} />
            </View>
            <Text style={[styles.logoutText, { color: colors.error, ...font.body }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 40,
    alignItems: 'center',
    borderBottomRightRadius: 24,
  },
  profileImageContainer: {
    marginBottom: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    opacity: 0.8,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 12,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    marginBottom: 5,
    position: 'relative',
  },
  navIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  navText: {
    fontSize: font.body.fontSize,
    flex: 1,
  },
  activeIndicator: {
    position: 'absolute',
    right: 0,
    top: '30%',
    height: '100%',
    width: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  footer: {
    padding: 0,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0,
    marginBottom: 12,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 12,
  },
  versionText: {
    fontSize: 12,
    textAlign: 'center',
  },
  hamburgerButton: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  line: {
    height: 3,
    borderRadius: 1.5,
    width: '100%',
  },
});

export default ModernDrawerContent;
