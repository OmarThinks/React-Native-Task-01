import {Text, TouchFiller, Icon} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';
import React, {useState} from 'react';
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
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        alignSelf: 'stretch',
        borderRadius: 7,
        overflow: 'hidden',
      }}>
      <TouchFiller
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      />
      <View
        style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 7,
          alignItems: 'center',
        }}>
        <Text variant="detailsHeader">{title}</Text>
        <Icon
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          size={10}
          color={colors.normalText}
        />
      </View>
    </View>
  );
};

const InfoDetail = ({title, value}: {title: string; value: string}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
      }}>
      <Text variant="detailName" style={{lineHeight: 31}}>
        {title}
      </Text>
      <Text variant="detailValue" style={{lineHeight: 31}}>
        {value}
      </Text>
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

  const [isImageInfoVisible, setIsImageInfoVisible] = useState(true);
  const [isNotesVisible, setIsNotesVisible] = useState(true);

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
          borderRadius: 25,
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
        <DetailsTitle
          title="Image Info"
          isVisible={isImageInfoVisible}
          setIsVisible={setIsImageInfoVisible}
        />
        <View
          style={{
            display: isImageInfoVisible ? 'flex' : 'none',
          }}>
          <InfoDetail title="Model" value="Epson LX-300" />
          <InfoDetail title="Model Name" value="Epson LX-300" />
          <InfoDetail title="Model Type" value="Epson LX-300" />
          <InfoDetail title="Cost" value="Epson LX-300" />
          <InfoDetail title="Category" value="Epson LX-300" />
          <InfoDetail title="Additional Description" value="Epson LX-300" />
          <InfoDetail title="Model Manufacturer" value="Epson LX-300" />
        </View>

        <HR />
        <DetailsTitle
          title="Notes"
          isVisible={isNotesVisible}
          setIsVisible={setIsNotesVisible}
        />
      </View>
    </View>
  );
};

export default MainLayout(ModelDetails, {
  title: 'Model Details',
  hasEditButton: true,
});
