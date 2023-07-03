import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import {createModelTable, dropModelTable} from './model/models';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'data.db', location: 'default'});
};

export const createTables = async (db: SQLiteDatabase) => {
  await createModelTable(db);
};

export const dropTables = async (db: SQLiteDatabase) => {
  await dropModelTable(db);
};

(async () => {
  console.log('Creating tables...');
  const db = await getDBConnection();
  //await dropTables(db);
  await createTables(db);

  console.log('Created tables.');
})();
