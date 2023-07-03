import {getStoredTheme, setStoredTheme} from './theme';

import {openDatabase} from 'react-native-sqlite-storage';
import {dropTables, getDBConnection} from './sqlite/db-service';
import {
  deleteModelItem,
  getModelItems,
  createModelItem,
  updateModelItem,
} from './sqlite/model/models';
export type {ModelItem} from './sqlite/model/models';

export {
  deleteModelItem,
  dropTables,
  getDBConnection,
  getModelItems,
  getStoredTheme,
  openDatabase,
  createModelItem,
  setStoredTheme,
  updateModelItem,
};
