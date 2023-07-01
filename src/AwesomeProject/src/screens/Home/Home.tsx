import { Text } from '@components';
import { MainLayout } from '@hoc';
import React from 'react';
import { View } from 'react-native';

/*
const Box = () => {
  return (
    <View
      style={{
        backgroundColor: 'green',
        padding: 50,
        borderRadius: 20
      }}
    />
  );
};
*/
const Home = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text variant="v16">Hey</Text>
      <View
        style={{ alignSelf: 'stretch', backgroundColor: 'red', height: 100 }}
      />

      {/*
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'wrap',
          backgroundColor: 'red',
          alignSelf: 'center'
        }}>
        <Box />
        <Box />
        <Box />
        <Box />
      </View>
      */}
    </View>
  );
};

export default MainLayout(Home, {
  title: 'Home'
});
