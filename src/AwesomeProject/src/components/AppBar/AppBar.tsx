import type {IconWeight} from '@components';
import {CircleIcon, Text, TouchFiller} from '@components';
import {RootStackParamList, navigationNames} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {setTheme, themeSelector} from '@redux';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const AppBarCircleIcon = ({
  iconName,
  iconColor,
  onPress,

  iconWeight = 'regular',
  caption,
}: {
  iconName: string;
  iconColor?: string;
  onPress?: () => void;

  iconWeight?: IconWeight;
  caption?: string;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <TouchFiller
        onPress={onPress}
        style={{backgroundColor: 'green'}}
        inactive
      />
      <View
        style={{
          paddingHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CircleIcon
          size={28}
          color={iconColor || colors.iconColor}
          iconName={iconName}
          bgColor={colors.iconBg}
          onPress={onPress}
          borderWidth={1}
          iconWeight={iconWeight}
        />
        {caption && (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 3,
            }}
            variant="appBarCircleIconText">
            {caption}
          </Text>
        )}
      </View>
    </View>
  );
};

const AppBar = ({
  title,
  hasBackButton = true,
}: {
  title?: string;
  hasBackButton?: boolean;
}) => {
  const colors = useAppTheme().colors;
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

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
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          flexShrink: 1,
          marginRight: 20,
          gap: 10,
          alignItems: 'center',
        }}>
        {hasBackButton && (
          <AppBarCircleIcon
            iconName="arrow-left"
            onPress={() => {
              navigation.goBack();
            }}
            caption="Back"
          />
        )}

        <Text
          style={{
            color: colors.normalText,
            flexShrink: 1,
          }}
          variant="appBarHeader"
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AppBarCircleIcon
          iconName="plug"
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}
          caption="Components"
        />
        <AppBarCircleIcon
          iconName="adjust"
          onPress={toggleTheme}
          caption={'Theme'}
        />
        <AppBarCircleIcon
          iconName="check"
          iconWeight="light"
          caption={'Proccess'}
        />
      </View>
    </View>
  );
};

export default AppBar;
