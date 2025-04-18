﻿export interface User {
  id: string;
  name: string;
  email: string;
}

export type AppTheme = 'light' | 'dark';

export type RootStackParamList = {
  Home: undefined;
  Components: undefined;
  Profile: { userId: string };
  Settings: undefined;
};
