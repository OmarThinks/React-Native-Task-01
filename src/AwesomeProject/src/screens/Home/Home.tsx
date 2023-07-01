import {Text, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '@theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Icon} from '@components';

const MainNav = () => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        marginHorizontal: 25,
        alignSelf: 'stretch',
        height: 100,
        backgroundColor: colors.cardBg,
        borderRadius: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <TouchFiller onPress={() => {}} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginLeft: 20,
        }}>
        <Icon name="warehouse" size={26} color={colors.homeNavItemIconColor} />
        <Text variant="menuItemHeader">Asset Inventory</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginRight: 20,
        }}>
        <Icon name="arrow-right" size={20} color={colors.green} />
      </View>
    </View>
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
