import {getStoredTheme, setStoredTheme} from './theme';

import {openDatabase} from 'react-native-sqlite-storage';
import {createTables} from './sqlite/db-service';
import {
  deleteTodoItem,
  getTodoItems,
  saveTodoItems,
  updateTodoItem,
} from './sqlite/todo/todo';

export {
  createTables,
  deleteTodoItem,
  getStoredTheme,
  getTodoItems,
  openDatabase,
  saveTodoItems,
  setStoredTheme,
  updateTodoItem,
};
