import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';

const CardItem = () => {
  return (
    <View>
      <Text variant="cardFooter">Model</Text>
    </View>
  );
};

const Model = () => {
  const colors = useAppTheme().colors;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text variant="v16">Hey</Text>
      <View
        style={{alignSelf: 'stretch', backgroundColor: 'red', height: 100}}
      />
      <CardItem />
      <Text
        onPress={() => {
          navigation.navigate('ModelDetails');
        }}>
        To Model Details
      </Text>
    </View>
  );
};

export default MainLayout(Model, {
  title: 'Model',
  hasBackButton: true,
  hasProccessButton: false,
  hasEditButton: false,
});
