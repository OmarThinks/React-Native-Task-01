import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

import {createModelTable} from './model/models';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'data.db', location: 'default'});
};

export const createTables = async (db: SQLiteDatabase) => {
  await createModelTable(db);
};

(async () => {
  console.log('Creating tables...');
  const db = await getDBConnection();
  await createTables(db);

  console.log('Created tables.');
})();
