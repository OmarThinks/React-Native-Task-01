import {Text, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '@theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Icon} from '@components';
import {Image} from 'react-native';

const VendorsImage = require('./assets/Vendors.png');
const StockFileImage = require('./assets/StockFile.png');

const MainNav = ({
  onPress,
  imgSource,
  title,
}: {
  onPress: () => void;
  imgSource: any;
  title: string;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        marginHorizontal: 25,
        alignSelf: 'stretch',
        backgroundColor: colors.cardBg,
        borderRadius: 200,
        overflow: 'hidden',

        elevation: 5,
      }}>
      <TouchFiller onPress={onPress} />
      <View
        style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 13,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <Image source={imgSource} />
          <Text variant="menuItemHeader">{title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}>
          <Icon name="arrow-right" size={20} color={colors.green} />
        </View>
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
        gap: 25,
      }}>
      <MainNav
        onPress={() => {}}
        imgSource={StockFileImage}
        title={'Asset Inventory'}
      />
      <MainNav
        onPress={() => {
          navigation.navigate('Model');
        }}
        imgSource={VendorsImage}
        title={'Model'}
      />
      <MainNav onPress={() => {}} imgSource={VendorsImage} title={'Person'} />
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Picture',
  hasBackButton: false,
});
