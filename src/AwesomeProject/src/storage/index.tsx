import {getStoredTheme, setStoredTheme} from './theme';

import {openDatabase} from 'react-native-sqlite-storage';
import {getDBConnection} from './sqlite/db-service';
import {
  deleteTodoItem,
  getTodoItems,
  saveTodoItems,
  updateTodoItem,
} from './sqlite/todo/todo';

export {
  deleteTodoItem,
  getDBConnection,
  getStoredTheme,
  getTodoItems,
  openDatabase,
  saveTodoItems,
  setStoredTheme,
  updateTodoItem,
};
