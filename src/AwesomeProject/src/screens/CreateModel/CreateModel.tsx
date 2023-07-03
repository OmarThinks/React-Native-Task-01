import {Text} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {TextInput, TextInputProps, Button} from 'react-native-paper';
import {navigationNames} from '@navigation';
import {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {DBContext} from '@contexts';
import {createModelItem} from '@storage';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

type CreateModelScreenProps = RouteProp<
  RootStackParamList,
  typeof navigationNames.CreateModel
>;

const ModelField = (props: TextInputProps) => {
  const theme = useAppTheme();
  const colors = useAppTheme().colors;

  return (
    <TextInput
      style={{
        //alignSelf: 'stretch',
        marginVertical: 10,
        borderRadius: 20,
        marginBottom: 21,
      }}
      mode="outlined"
      theme={{
        ...theme,
        // roundness: 20,
      }}
      outlineStyle={
        {
          //width: 2,
        }
      }
      underlineStyle={
        {
          //height: 0,
        }
      }
      contentStyle={{
        fontSize: 18,
      }}
      placeholderTextColor={colors.inputTextPlaceHolder}
      //placeholder={label}
      {...props}
    />
  );
};
/*
  model_name: string;
  model_code: string;
  model_type: string;
  model_cost: number;
  model_category: string;
  model_additionalDesctiption: string;
  model_image_link: string;

*/

const CreateModel = () => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const [modelTitle, setModelTitle] = React.useState('');
  const [modelCode, setModelCode] = React.useState('');
  const [modelType, setModelType] = React.useState('');
  const [modelCost, setModelCost] = React.useState('');
  const [modelCategory, setModelCategory] = React.useState('');
  const [modelDescription, setModelDescription] = React.useState('');

  const updateModelTitle = (text: string) => {
    setErrorMessage('');
    setModelTitle(text);
  };
  const updateModelCode = (text: string) => {
    setErrorMessage('');
    setModelCode(text);
  };
  const updateModelType = (text: string) => {
    setErrorMessage('');
    setModelType(text);
  };
  const updateModelCost = (text: string) => {
    setErrorMessage('');
    setModelCost(text);
  };
  const updateModelCategory = (text: string) => {
    setErrorMessage('');
    setModelCategory(text);
  };
  const updateModelDescription = (text: string) => {
    setErrorMessage('');
    setModelDescription(text);
  };

  const colors = useAppTheme().colors;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const db = React.useContext(DBContext) as SQLiteDatabase;

  const {fetchModels} = useRoute<CreateModelScreenProps>().params;

  return (
    <View>
      <Text variant="v25">Create a Model</Text>
      <ModelField
        value={modelTitle}
        onChangeText={updateModelTitle}
        label={'Name'}
      />
      <ModelField
        value={modelCode}
        onChangeText={updateModelCode}
        label={'Code'}
        keyboardType="decimal-pad"
      />
      <ModelField
        value={modelType}
        onChangeText={updateModelType}
        label={'Type'}
      />
      <ModelField
        value={modelCost}
        label={'Cost'}
        onChangeText={updateModelCost}
        keyboardType="decimal-pad"
      />
      <ModelField
        value={modelCategory}
        onChangeText={updateModelCategory}
        label={'Category'}
      />
      <ModelField
        value={modelDescription}
        onChangeText={updateModelDescription}
        label={'Description'}
        multiline={true}
        numberOfLines={4}
      />

      {errorMessage !== '' && (
        <Text
          style={{
            color: 'red',
            marginBottom: 20,
          }}
          variant="v18">
          {errorMessage}
        </Text>
      )}
      <Button
        icon={'plus'}
        onPress={async () => {
          setErrorMessage('');

          if (modelTitle === '') {
            setErrorMessage('Name is required');
            return;
          }
          if (modelCode === '') {
            setErrorMessage('Code is required');
            return;
          }

          if (modelType === '') {
            setErrorMessage('Type is required');
            return;
          }
          if (modelCost === '') {
            setErrorMessage('Cost is required');
            return;
          }
          if (modelCategory === '') {
            setErrorMessage('Category is required');
            return;
          }
          if (modelDescription === '') {
            setErrorMessage('Description is required');
            return;
          }

          await createModelItem({
            db,
            name: modelTitle,
            code: 'code',
            model_type: 'mt',
            cost: 144006.97852,
            category: 'saff',
            additionalDesctiption: 'Nothing',
            imageLink: 'No WHere',
          });
          await fetchModels();
          navigation.goBack();
        }}
        style={{
          backgroundColor: colors.iconBg,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: colors.iconColor,
          }}>
          Create
        </Text>
      </Button>
    </View>
  );
};

export default MainLayout(CreateModel, {
  title: 'Create Model',
});
