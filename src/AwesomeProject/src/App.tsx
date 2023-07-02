import {RootStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store, themeSelector} from '@redux';
import {darkTheme, lightTheme} from '@theme';
import React, {useState} from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {getModelItems, getDBConnection} from './storage';
import {DBContext} from '@contexts';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

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
  const [db, setDb] = useState<SQLiteDatabase | null>(null);

  return (
    <DBContext.Provider value={db}>
      <ReduxProvider store={store}>
        <AppWithoutRedux />
      </ReduxProvider>
    </DBContext.Provider>
  );
};

export default App;
