import {Icon, Text, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useAppTheme} from '@theme';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native-paper';

type ModelDetailScreenProps = RouteProp<
  RootStackParamList,
  typeof navigationNames.ModelDetails
>;

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

const historyItemsData = [
  {
    title: 'Jennifer Smith',
    date: Date().toString(),
    value: 'This Item needs to be checked',
  },
  {
    title: 'Jennifer Smith',
    date: Date().toString(),
    value: 'This Item needs to be checked',
  },
];

const HistoryItems = ({
  historyItems,
}: {
  historyItems: typeof historyItemsData;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        alignSelf: 'stretch',
        //marginTop: 16,
        padding: 9,
        backgroundColor: colors.onCard,
        borderRadius: 19,
      }}>
      {historyItems.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              //flexDirection: 'row',
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              //marginTop: 7,
              //paddingVertical: 7,
              //alignItems: 'center',
            }}>
            <Text variant="notesItemHistoryTitle">{item.title}</Text>
            <Text variant="notesItemHistoryDate">{item.date}</Text>
            <Text variant="notesItemHistoryDetail">{item.value}</Text>
            {index !== historyItems.length - 1 && (
              <View
                style={{
                  height: 2,
                  backgroundColor: colors.hrColor,
                  alignSelf: 'stretch',
                  marginVertical: 7,
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const ModelDetails = () => {
  const colors = useAppTheme().colors;
  const theme = useAppTheme();

  const [isImageInfoVisible, setIsImageInfoVisible] = useState(true);
  const [isNotesVisible, setIsNotesVisible] = useState(true);

  const {id: modelId} = useRoute<ModelDetailScreenProps>().params;

  console.log(params);

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
          flexGrow: 1,
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

        <View
          style={{
            display: isNotesVisible ? 'flex' : 'none',
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              marginRight: 22,
              overflow: 'hidden',
              borderRadius: 20,
            }}>
            <TouchFiller onPress={() => {}} />
            <View
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                gap: 7,
                alignItems: 'center',
                margin: 10,
              }}>
              <Icon name="save" color={colors.normalText} size={20} />
              <Text variant="notesHistorySaveText">Save</Text>
            </View>
          </View>

          <TextInput
            style={{
              alignSelf: 'stretch',
              marginTop: 5,
              borderRadius: 20,
              marginBottom: 21,
              backgroundColor: colors.onCard,
            }}
            theme={{
              ...theme,
              roundness: 20,
            }}
            outlineStyle={{
              width: 2,
            }}
            underlineStyle={{
              height: 0,
            }}
            dense
            contentStyle={{
              fontSize: 18,
            }}
            placeholder="Add a Note…"
            placeholderTextColor={colors.inputTextPlaceHolderOnCard}
          />

          <HistoryItems historyItems={historyItemsData} />
        </View>
        <HR />
      </View>
    </View>
  );
};

export default MainLayout(ModelDetails, {
  title: 'Model Details',
  hasEditButton: true,
});
