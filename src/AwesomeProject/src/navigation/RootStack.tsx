import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Components1,
  Home,
  Splash,
  Model,
  ModelDetails,
  CreateModel,
} from '@screens';
import React from 'react';
import {ModelItem} from '@storage';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

// https://reactnavigation.org/docs/typescript/

export const navigationNames = {
  Home: 'Home',
  Splash: 'Splash',
  Components1: 'Components1',
  Model: 'Model',
  ModelDetails: 'ModelDetails',
  CreateModel: 'CreateModel',
} as const;

export type NavigationNameType = keyof typeof navigationNames;

export type RootStackParamList = {
  [navigationNames.Home]: undefined;
  [navigationNames.Splash]: undefined;
  [navigationNames.Components1]: undefined;
  [navigationNames.Model]: undefined;
  [navigationNames.ModelDetails]: {id: number};
  [navigationNames.CreateModel]: {
    fetchModels: () => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={navigationNames.Splash} component={Splash} />
    <Stack.Screen name={navigationNames.Home} component={Home} />
    <Stack.Screen name={navigationNames.Components1} component={Components1} />
    <Stack.Screen name={navigationNames.Model} component={Model} />
    <Stack.Screen
      name={navigationNames.ModelDetails}
      component={ModelDetails}
    />
    <Stack.Screen name={navigationNames.CreateModel} component={CreateModel} />
  </Stack.Navigator>
);
