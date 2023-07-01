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
import type {IconWeight} from '@components';

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
    <CircleIcon
      size={40}
      color={iconColor || colors.iconColor}
      iconName={iconName}
      bgColor={colors.iconBg}
      onPress={onPress}
      borderWidth={1}
      iconWeight={iconWeight}
    />
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
          />
        )}

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
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
        <AppBarCircleIcon
          iconName="plug"
          onPress={() => {
            navigation.navigate(navigationNames.Components1);
          }}
        />
        <AppBarCircleIcon iconName="adjust" onPress={toggleTheme} />
        <AppBarCircleIcon iconName="check" iconWeight="light" />
      </View>
    </View>
  );
};

export default AppBar;
