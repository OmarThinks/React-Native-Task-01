import {Text} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';

const CreateModel = () => {
  const colors = useAppTheme().colors;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text> Create Model</Text>
    </View>
  );
};

export default MainLayout(CreateModel, {
  title: 'Create Model',
});
