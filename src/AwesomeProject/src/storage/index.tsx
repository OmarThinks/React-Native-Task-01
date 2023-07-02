import {getStoredTheme, setStoredTheme} from './theme';

import {openDatabase} from 'react-native-sqlite-storage';
import {getDBConnection} from './sqlite/db-service';
import {
  deleteModelItem,
  getModelItems,
  saveModelItems,
  updateModelItem,
} from './sqlite/model/models';

export {
  deleteModelItem,
  getDBConnection,
  getStoredTheme,
  getModelItems,
  openDatabase,
  saveModelItems,
  setStoredTheme,
  updateModelItem,
};
