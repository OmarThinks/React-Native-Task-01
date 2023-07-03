import {Text, TouchFiller} from '@components';
import {DBContext} from '@contexts';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ModelItem, createModelItem, getModelItems} from '@storage';
import {useAppTheme} from '@theme';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

const InkImage = require('./assets/Ink.png');
const LCDImage = require('./assets/LCDs.png');
const PrinterImage = require('./assets/Printers.png');
const labtopImage = require('./assets/Labtops.png');
const Barcode = require('./assets/barcode.png');

const styles = StyleSheet.create({
  itemsRow: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const CardItem = ({
  imgSrc,
  onPress,
  caption,
}: {
  imgSrc: any;
  onPress?: () => void;
  caption: string;
}) => {
  const colors = useAppTheme().colors;

  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexShrink: 1,
      }}>
      <View
        style={{
          backgroundColor: colors.smallCardBg,
          elevation: 20,
          borderRadius: 19,
        }}>
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 19,
          }}>
          <TouchFiller onPress={onPress} />

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
        {caption}
      </Text>
    </View>
  );
};

const fetchModels = async (
  db: SQLiteDatabase,
  setState: (b: ModelItem[]) => void,
) => {
  const models = await getModelItems(db);
  setState(models);
};

const Model = () => {
  const colors = useAppTheme().colors;
  const theme = useAppTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [searchText, setSearchText] = React.useState('');

  const [newModelTitle, setNewModelTitle] = React.useState('');
  const [models, setModels] = React.useState<ModelItem[]>([]);

  console.log('models', models);

  const db = React.useContext(DBContext);

  const renderModelItems = React.useMemo(() => {
    const filerTextLower = searchText.toLowerCase();
    const filteredData = models.filter(model => {
      const modelName = model.model_name.toLowerCase();
      return modelName.includes(filerTextLower);
    });

    // console.log('filteredData', filteredData);

    return filteredData.map(model => {
      return (
        <CardItem
          imgSrc={PrinterImage}
          caption={model.model_name}
          key={model.id}
          onPress={() => {
            navigation.navigate('ModelDetails', {id: model.id});
          }}
        />
      );
    });
  }, [models, searchText, navigation]);

  React.useEffect(() => {
    fetchModels(db, setModels);
  }, [db]);

  return (
    <View
      style={{
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          alignSelf: 'stretch',
          marginVertical: 10,
          borderRadius: 20,
          marginBottom: 21,
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
        right={<TextInput.Icon icon={Barcode} size={26} />}
        placeholder="Type to Search…"
        placeholderTextColor={colors.inputTextPlaceHolder}
        value={searchText}
        onChangeText={setSearchText}
      />

      <TextInput
        style={{
          alignSelf: 'stretch',
          marginVertical: 10,
          borderRadius: 20,
          marginBottom: 21,
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
        placeholder="Create a field …"
        placeholderTextColor={colors.inputTextPlaceHolder}
        value={newModelTitle}
        onChangeText={setNewModelTitle}
      />
      <Button
        icon={'plus'}
        onPress={() => {
          if (newModelTitle === '') {
            return;
          }
          createModelItem(db, newModelTitle);
          setNewModelTitle('');
          fetchModels(db, setModels);
        }}
        style={{
          backgroundColor: colors.smallCardBg,
          marginBottom: 20,
        }}>
        <Text>Create</Text>
      </Button>

      <View
        style={{
          ...styles.itemsRow,
        }}>
        {renderModelItems}
      </View>
    </View>
  );
};

export default MainLayout(Model, {
  title: 'Model',
});
