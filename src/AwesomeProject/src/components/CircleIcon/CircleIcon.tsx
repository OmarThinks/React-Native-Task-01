import {Icon, TouchFiller} from '@components';
import React from 'react';
import {View, ViewStyle} from 'react-native';
import type {IconWeight} from '@components';

const CircleIcon = ({
  size,
  color,
  iconName,

  bgColor = 'transparent',
  style = {},
  onPress,
  borderWidth = 0,
  borderColor,
  iconSize,

  iconWeight = 'regular',
}: {
  size: number;
  color: string;
  iconName: string;

  bgColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
  borderWidth?: number;
  borderColor?: string;
  iconSize?: number;
  iconWeight?: IconWeight;
}) => {
  iconSize ??= size / 2;
  borderColor ??= color;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderWidth,
        borderColor,
        backgroundColor: bgColor,
        borderRadius: size / 2,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}>
      <TouchFiller onPress={onPress} />
      <Icon
        size={iconSize}
        name={iconName}
        color={color}
        iconWeight={iconWeight}
      />
    </View>
  );
};

export default CircleIcon;
