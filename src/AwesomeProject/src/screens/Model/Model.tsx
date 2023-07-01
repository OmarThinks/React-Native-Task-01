import {Text} from '@components';
import {MainLayout} from '@hoc';
import React from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import {useAppTheme} from '@theme';
import {TouchFiller} from '@components';

const InkImage = require('./assets/Ink.png');
const LCDImage = require('./assets/LCDs.png');
const PrinterImage = require('./assets/Printers.png');
const labtopImage = require('./assets/Labtops.png');

const CardItem = ({imgSrc}: {imgSrc: any}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexShrink: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 20,
          borderRadius: 19,
        }}>
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 19,
          }}>
          <TouchFiller onPress={() => {}} />

          <Image
            source={imgSrc}
            style={{
              width: 137,
              height: 91,
              resizeMode: 'contain',
              flexShrink: 1,
              marginHorizontal: 12,
              marginVertical: 10,
            }}
          />
        </View>
      </View>

      <Text
        variant="cardFooter"
        style={{
          marginTop: 4,
        }}>
        Model
      </Text>
    </View>
  );
};

const Model = () => {
  const colors = useAppTheme().colors;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CardItem imgSrc={InkImage} />
      <Text
        onPress={() => {
          navigation.navigate('ModelDetails');
        }}>
        To Model Details
      </Text>

      <Image source={InkImage} />
      <Image source={LCDImage} />
      <Image source={PrinterImage} />
      <Image source={labtopImage} />
    </View>
  );
};

export default MainLayout(Model, {
  title: 'Model',
  // hasBackButton: true,
  //hasProccessButton: false,
  //hasEditButton: false,
});
