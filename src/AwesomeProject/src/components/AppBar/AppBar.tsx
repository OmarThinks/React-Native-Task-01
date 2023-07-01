import { Text } from '@components';
import { setTheme, themeSelector } from '@redux';
import { useAppTheme } from '@theme';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, navigationNames } from '@navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const AppBar = ({ title }: {title?: string}) => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  // console.log('Title', title);

  return (
    <View
      style={{
        height: 50,
        backgroundColor: colors.appBarBg,
        paddingHorizontal: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // flexGrow: 1,
        // flexShrink: 1
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          flexShrink: 1,
          marginRight: 20
        }}>
        <Text
          style={{
            color: colors.normalText,
            flexShrink: 1
          }}
          variant="v20"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{ marginRight: 10 }}
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}>
          Components 1
        </Text>
        <Text style={{ marginRight: 10 }} onPress={toggleTheme}>
          Theme
        </Text>
        <Text style={{}}>Drawer</Text>
      </View>
    </View>
  );
};

export default AppBar;
