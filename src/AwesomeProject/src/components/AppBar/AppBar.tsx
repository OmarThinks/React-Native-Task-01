import {Text} from '@components';
import {setTheme} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CircleIcon} from '@components';
import {themeSelector} from '@redux';

const AppBar = ({title}: {title?: string}) => {
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
        justifyContent: 'space-between',
        // flexGrow: 1,
        // flexShrink: 1
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          flexShrink: 1,
          marginRight: 20,
        }}>
        <Text
          style={{
            color: colors.normalText,
            flexShrink: 1,
          }}
          variant="v20"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CircleIcon
          size={40}
          color={colors.themeIconColor}
          iconName="adjust"
          bgColor={colors.iconBg}
          onPress={toggleTheme}
          borderWidth={1}
        />
        <Text
          style={{}}
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}>
          Components
        </Text>
      </View>
    </View>
  );
};

export default AppBar;
