import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  style = {},
  onPress,
  zIndex = 1,
  inactive = false,
}: {
  style?: ViewStyle;
  onPress?: () => void;
  zIndex?: number;
  inactive?: boolean;
}) => {
  const borderRadius = style.borderRadius || 0;

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius,
        position: 'absolute',
        zIndex,
        width: '100%',
        height: '100%',
      }}>
      <TouchableRipple
        style={{
          width: '100%',
          height: '100%',
        }}
        onPress={onPress}
        rippleColor={inactive ? 'transparent' : undefined}>
        <View style={{width: 0, height: 0}} />
      </TouchableRipple>
    </View>
  );
};

export default TouchFiller;
