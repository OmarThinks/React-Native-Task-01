import {SQLiteDatabase} from 'react-native-sqlite-storage';
//  model type, cost, category, Additional description, image link
export type ModelItem = {
  id: number;
  name: string;
  code: string;
  type: string;
  cost: number;
  category: string;
  additionalDesctiption: string;
  imageLink: string;
};

export const modelTableName = 'model';

export const createModelTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${modelTableName}(
    name TEXT NOT NULL, 
    code TEXT NOT NULL,
    type TEXT NOT NULL,
    cost REAL NOT NULL,
    category TEXT NOT NULL,
    additionalDesctiption TEXT NOT NULL,
    imageLink TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const getModelItems = async (
  db: SQLiteDatabase,
): Promise<ModelItem[]> => {
  try {
    const modelItems: ModelItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,name,code,type,cost,category,additionalDesctiption,imageLink FROM ${modelTableName}`,
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
  code: string,
  type: string,
  cost: number,
  category: string,
  additionalDesctiption: string,
  imageLink: string,
) => {
  const updateQuery = `UPDATE ${modelTableName} SET 
  name = '${name}',
  code = '${code}',
  type = '${type}',
  cost = ${cost},
  category = '${category}',
  additionalDesctiption = '${additionalDesctiption}',
  imageLink = '${imageLink}',
  WHERE rowid = ${id}`;
  await db.executeSql(updateQuery);
};

export const dropModelTable = async (db: SQLiteDatabase) => {
  const query = `IF EXISTS(SELECT * FROM ${modelTableName}) DROP TABLE ${modelTableName}`;

  await db.executeSql(query);
};

export const createModelItem = async (
  db: SQLiteDatabase,
  name: string,
  code: string,
  type: string,
  cost: number,
  category: string,
  additionalDesctiption: string,
  imageLink: string,
) => {
  const insertQuery = `INSERT INTO ${modelTableName}(name,
      code, type, cost, category, additionalDesctiption, imageLink) 
      values(
        '${name}',  
        '${code}',
        '${type}',
        '${cost}',
        '${category}',
        '${additionalDesctiption}',
        '${imageLink}'
    )`;

  await db.executeSql(insertQuery);
};
