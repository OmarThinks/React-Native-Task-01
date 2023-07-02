import {createContext} from 'react';
import {SQLiteDatabase} from 'react-native-sqlite-storage';

const DBContext = createContext<any | SQLiteDatabase>(null);

export {DBContext};
