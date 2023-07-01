import {Text, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const PrinterImage = require('./assets/Printers.png');

const DetailsTitle = ({
  title,
  isVisible,
  setIsVisible,
}: {
  title: string;
  isVisible: boolean;
  setIsVisible: (a: boolean) => void;
}) => {
  return (
    <View style={{alignSelf: 'stretch'}}>
      <TouchFiller onPress={() => {}} />
      <Text variant="detailsHeader">{title}</Text>
    </View>
  );
};

const HR = () => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        marginTop: 16,
        marginBottom: 23,
        height: 3,
        backgroundColor: colors.hrColor,
        alignSelf: 'stretch',
      }}
    />
  );
};

const ModelDetails = () => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
      <View
        // This is the container of the card
        style={{
          alignSelf: 'stretch',
          backgroundColor: colors.cardBg,
          //height: 100,
          paddingHorizontal: 16,
          paddingVertical: 13,
        }}>
        <View
          // This is the container of card image
          style={{
            backgroundColor: colors.smallCardBg,
            elevation: 10,
            borderRadius: 19,
            alignSelf: 'center',
          }}>
          <Image
            source={PrinterImage}
            style={{
              width: 195,
              height: 130,
              resizeMode: 'contain',
              flexShrink: 1,
              marginHorizontal: 12,
              marginVertical: 15,
            }}
          />
        </View>
        <HR />
        <DetailsTitle title="Image Info" />
      </View>
    </View>
  );
};

export default MainLayout(ModelDetails, {
  title: 'Model Details',
  hasEditButton: true,
});
