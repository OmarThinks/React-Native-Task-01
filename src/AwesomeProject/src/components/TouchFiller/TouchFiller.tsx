import React from 'react';
import {View, ViewStyle} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

const TouchFiller = ({
  style = {},
  onPress,
  zIndex = 1,
}: {
  style?: ViewStyle;
  onPress?: () => void;
  zIndex?: number;
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
          flexGrow: 1,
          alignSelf: 'stretch',
        }}
        onPress={onPress}>
        <View />
      </TouchableRipple>
    </View>
  );
};

export default TouchFiller;
