import {SQLiteDatabase} from 'react-native-sqlite-storage';

export type ModelItem = {
  id: number;
  name: string;
};

export const modelTableName = 'model';

export const createModelTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${modelTableName}(
    name TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const getModelItems = async (
  db: SQLiteDatabase,
): Promise<ModelItem[]> => {
  try {
    const modelItems: ModelItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,name FROM ${modelTableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        modelItems.push(result.rows.item(index));
      }
    });
    return modelItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get modelItems !!!');
  }
};

export const _saveModelItems = async (
  db: SQLiteDatabase,
  modelItems: ModelItem[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${modelTableName}(rowid, name) values` +
    modelItems.map(i => `(${i.id}, '${i.name}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteModelItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${modelTableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${modelTableName}`;

  await db.executeSql(query);
};

export const updateModelItem = async (
  db: SQLiteDatabase,
  id: number,
  name: string,
) => {
  const updateQuery = `UPDATE ${modelTableName} SET name = '${name}' WHERE rowid = ${id}`;
  await db.executeSql(updateQuery);
};

export const dropModelTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${modelTableName}`;

  await db.executeSql(query);
};

export const createModelItem = async (db: SQLiteDatabase, name: string) => {
  const insertQuery = `INSERT INTO ${modelTableName}(name) values('${name}')`;

  await db.executeSql(insertQuery);
};
