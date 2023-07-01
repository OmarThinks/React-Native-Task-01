import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash, Components1 } from '@screens';
import React from 'react';

// https://reactnavigation.org/docs/typescript/

export const navigationNames = {
  Home: 'Home',
  Splash: 'Splash',
  Components1: 'Components1'
} as const;

export type NavigationNameType = keyof typeof navigationNames;

export type RootStackParamList = {
  [navigationNames.Home]: undefined;
  [navigationNames.Splash]: undefined;
  [navigationNames.Components1]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={navigationNames.Splash} component={Splash} />
    <Stack.Screen name={navigationNames.Home} component={Home} />
    <Stack.Screen name={navigationNames.Components1} component={Components1} />
  </Stack.Navigator>
);
