import {openDatabase} from 'react-native-sqlite-storage';
import {dropTables, getDBConnection} from './sqlite/db-service';
import {
  createModelItem,
  deleteModelItem,
  getModelItems,
  updateModelItem,
} from './sqlite/model/models';
import {
  createNoteItem,
  deleteNoteItem,
  getNoteItems,
} from './sqlite/notes/notes';
import {getStoredTheme, setStoredTheme} from './theme';
export type {ModelItem} from './sqlite/model/models';
export type {NoteItem} from './sqlite/notes/notes';

export {
  createModelItem,
  createNoteItem,
  deleteModelItem,
  deleteNoteItem,
  dropTables,
  getDBConnection,
  getModelItems,
  getNoteItems,
  getStoredTheme,
  openDatabase,
  setStoredTheme,
  updateModelItem,
};
