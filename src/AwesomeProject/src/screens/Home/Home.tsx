import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '@theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

const MainNav = () => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        marginHorizontal: 25,
        alignSelf: 'stretch',
        height: 100,
        backgroundColor: 'green',
      }}
    />
  );
};

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
      <MainNav />
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Picture',
  hasBackButton: false,
});
