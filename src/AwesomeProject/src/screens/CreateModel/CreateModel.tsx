import {Text} from '@components';
import {MainLayout} from '@hoc';
import {RootStackParamList} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppTheme} from '@theme';
import React from 'react';
import {View} from 'react-native';
import {TextInput, TextInputProps, Button} from 'react-native-paper';

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
  const [modelTitle, setModelTitle] = React.useState('');
  const [modelCode, setModelCode] = React.useState('');
  const [modelType, setModelType] = React.useState('');
  const [modelCost, setModelCost] = React.useState('');
  const [modelCategory, setModelCategory] = React.useState('');
  const [modelDescription, setModelDescription] = React.useState('');

  const colors = useAppTheme().colors;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text variant="v25">Create a Model</Text>
      <ModelField
        value={modelTitle}
        onChangeText={setModelTitle}
        label={'Name'}
      />
      <ModelField
        value={modelDescription}
        onChangeText={setModelDescription}
        label={'Description'}
        multiline={true}
        numberOfLines={4}
      />
      <ModelField
        value={modelCode}
        onChangeText={setModelCode}
        label={'Image'}
      />

      <ModelField
        value={modelType}
        onChangeText={setModelType}
        label={'Price'}
      />
      <ModelField
        value={modelCost}
        label={'Stock'}
        onChangeText={setModelCost}
      />
      <ModelField
        value={modelCategory}
        onChangeText={setModelCategory}
        label={'Category'}
      />

      <Button
        icon={'plus'}
        onPress={() => {
          if (newModelTitle === '') {
            return;
          }
          createModelItem({
            db,
            name: newModelTitle,
            code: 'code',
            model_type: 'mt',
            cost: 144006.97852,
            category: 'saff',
            additionalDesctiption: 'Nothing',
            imageLink: 'No WHere',
          });
          setNewModelTitle('');
          fetchModels();
        }}
        style={{
          backgroundColor: 'lime',
          marginBottom: 20,
        }}>
        <Text>Create</Text>
      </Button>
    </View>
  );
};

export default MainLayout(CreateModel, {
  title: 'Create Model',
});
