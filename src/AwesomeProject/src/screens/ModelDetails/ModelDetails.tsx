import {Icon, Text, TouchFiller} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getModelItems, getNoteItems} from '@storage';
import {useAppTheme} from '@theme';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {DBContext} from '@contexts';
import {ModelItem} from '@storage';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {NoteItem} from '@storage';
import {createNoteItem} from '@storage';

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

  /*
  
    note_note: string;
  user_name: string;
  note_date: string;
  note_details: string;
  model_id: number;


      title: string;
    date: string;
    value: string;

  */

  const [models, setModels] = React.useState<ModelItem[] | null>(null);
  const [notes, setNotes] = React.useState<NoteItem[] | null>(null);
  const modelNotes = React.useMemo(() => {
    if (notes) {
      const _notes = notes.filter(note => note.model_id === modelId);

      return _notes.map(note => {
        return {
          id: note.id,
          value: note.note_note,
          title: note.user_name,
          date: note.note_date,
          details: note.note_details,
          model_id: note.model_id,
        };
      });
    }
    return [];
  }, [notes, modelId]);

  const db = React.useContext(DBContext) as SQLiteDatabase;

  const fetchModels = async () => {
    try {
      const _models = await getModelItems(db);
      setModels(_models);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNotes = async () => {
    try {
      const _notes = await getNoteItems(db);
      setNotes(_notes);
    } catch (e) {
      console.log(e);
    }
  };

  const model = models?.find(_model => _model.id === modelId);

  console.log(modelId);

  console.log('NOTES', notes);

  const model_name = model?.model_name || '';
  const model_code = model?.model_code.toString() || '';
  const model_type = model?.model_type || '';
  const model_cost = model?.model_cost.toString() || '';
  const model_category = model?.model_category || '';
  const model_additionalDesctiption = model?.model_additionalDesctiption || '';

  React.useEffect(() => {
    fetchModels();
    fetchNotes();
  }, []);

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
          <InfoDetail title="Model Name" value={model_name} />
          <InfoDetail title="Model Code" value={model_code} />
          <InfoDetail title="Model Type" value={model_type} />
          <InfoDetail title="Cost" value={model_cost} />
          <InfoDetail title="Category" value={model_category} />
          <InfoDetail
            title="Additional Description"
            value={model_additionalDesctiption}
          />
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
              //marginRight: 22,
              overflow: 'hidden',
              borderRadius: 20,
              backgroundColor: colors.onCard,
              marginBottom: 5,
            }}>
            <TouchFiller
              onPress={() => {
                createNoteItem({
                  db,
                  note_note: 'Hey',
                  user_name: 'Potato',
                  note_date: 'Today',
                  note_details: 'Details',
                  model_id: modelId,
                });
              }}
            />
            <View
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                gap: 7,
                alignItems: 'center',
                margin: 10,
                marginHorizontal: 30,
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

          <HistoryItems historyItems={modelNotes} />
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
