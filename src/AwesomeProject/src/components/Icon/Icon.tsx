import React from 'react';
import {ViewStyle} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

export type IconWeight = 'light' | 'regular' | 'solid';

const Icon = ({
  size,
  color,
  name,
  brand = false,
  style = {},

  iconWeight = 'regular',
}: {
  size: number;
  color: string;
  name: string;
  style?: ViewStyle;
  brand?: boolean;

  iconWeight?: IconWeight;
}) => {
  const lightWeight = iconWeight === 'light';
  const solidWeight = iconWeight === 'solid';

  return (
    <FAIcon
      name={name}
      size={size}
      color={color}
      solid={solidWeight}
      light={lightWeight}
      brand={brand}
      style={style}
    />
  );
};

export default Icon;
