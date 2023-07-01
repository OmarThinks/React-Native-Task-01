import {RootStack} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {store, themeSelector} from '@redux';
import {darkTheme, lightTheme} from '@theme';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider, useSelector} from 'react-redux';

const AppWithoutRedux = () => {
  const theme = useSelector(themeSelector);

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
