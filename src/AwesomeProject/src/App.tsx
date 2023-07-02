import {RootStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store, themeSelector} from '@redux';
import {darkTheme, lightTheme} from '@theme';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {getModelItems, getDBConnection} from './storage';

const dbStaff = async () => {
  const db = await getDBConnection();
  const models = await getModelItems(db);
  console.log(models);
};
const AppWithoutRedux = () => {
  const theme = useSelector(themeSelector);
  dbStaff();
  return (
    <PaperProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppWithoutRedux />
    </ReduxProvider>
  );
};

export default App;
