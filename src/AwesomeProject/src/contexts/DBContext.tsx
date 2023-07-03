import {createContext} from 'react';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

const DBContext = createContext<null | SQLiteDatabase>(null);

export {DBContext};
