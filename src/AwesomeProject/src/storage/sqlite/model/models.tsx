import {SQLiteDatabase} from 'react-native-sqlite-storage';
//  model type, cost, category, Additional description, image link
export type ModelItem = {
  id: number;
  model_name: string;
  model_code: string;
  model_type: string;
  model_cost: number;
  model_category: string;
  model_additionalDesctiption: string;
  model_image_link: string;
};

export const modelTableName = 'model';

export const createModelTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${modelTableName}(
    model_name TEXT NOT NULL, 
    model_code TEXT NOT NULL,
    model_type TEXT NOT NULL,
    model_cost REAL NOT NULL,
    model_category TEXT NOT NULL,
    model_additionalDesctiption TEXT NOT NULL,
    model_imageLink TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const getModelItems = async (
  db: SQLiteDatabase,
): Promise<ModelItem[]> => {
  try {
    const modelItems: ModelItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,model_name,model_code,model_type,model_cost,model_category,model_additionalDesctiption,model_imageLink FROM ${modelTableName}`,
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
  model_name = '${name}',
  model_code = '${code}',
  model_type = '${type}',
  model_cost = ${cost},
  model_category = '${category}',
  model_additionalDesctiption = '${additionalDesctiption}',
  model_imageLink = '${imageLink}',
  WHERE rowid = ${id}`;
  await db.executeSql(updateQuery);
};

export const dropModelTable = async (db: SQLiteDatabase) => {
  const query = `IF EXISTS(SELECT * FROM ${modelTableName}) DROP TABLE ${modelTableName}`;

  await db.executeSql(query);
};

export const createModelItem = async ({
  db,
  name,
  code,
  model_type,
  cost,
  category,
  additionalDesctiption,
  imageLink,
}: {
  db: SQLiteDatabase;
  name: string;
  code: string;
  model_type: string;
  cost: number;
  category: string;
  additionalDesctiption: string;
  imageLink: string;
}) => {
  const insertQuery = `INSERT INTO ${modelTableName}(model_name,
    model_code, model_type, model_cost, model_category, model_additionalDesctiption, model_imageLink) 
      values(
        '${name}',  
        '${code}',
        '${model_type}',
        '${cost}',
        '${category}',
        '${additionalDesctiption}',
        '${imageLink}'
    )`;

  await db.executeSql(insertQuery);
};
