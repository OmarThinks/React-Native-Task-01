import {DBContext} from '@contexts';
import {RootStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store, themeSelector} from '@redux';
import {darkTheme, lightTheme} from '@theme';
import React, {useState, useEffect} from 'react';
import {PaperProvider} from 'react-native-paper';
import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {Provider as ReduxProvider, useSelector} from 'react-redux';
import {getDBConnection, getModelItems} from './storage';

const dbStaff = async () => {
  // const db = await getDBConnection();
  // const models = await getModelItems(db);
  // console.log(models);
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

  useEffect(() => {
    const init = async () => {
      const _db = await getDBConnection();
      setDb(_db);
      const models = await getModelItems(_db);
      console.log(models);
    };
    init();
  }, []);

  console.log(db);

  return (
    <DBContext.Provider value={db}>
      <ReduxProvider store={store}>
        <AppWithoutRedux />
      </ReduxProvider>
    </DBContext.Provider>
  );
};

export default App;
