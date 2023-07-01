import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';

const Model = () => {
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
    </View>
  );
};

export default MainLayout(Model, {
  title: 'Model',
});
