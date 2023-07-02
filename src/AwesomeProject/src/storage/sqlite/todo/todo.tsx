import {SQLiteDatabase} from 'react-native-sqlite-storage';

export type ToDoItem = {
  id: number;
  value: string;
};

export const todoTableName = 'todo';

export const createTodoTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${todoTableName}(
          value TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
  try {
    const todoItems: ToDoItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,value FROM ${todoTableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

export const saveTodoItems = async (
  db: SQLiteDatabase,
  todoItems: ToDoItem[],
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${todoTableName}(rowid, value) values` +
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${todoTableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${todoTableName}`;

  await db.executeSql(query);
};

export const updateTodoItem = async (
  db: SQLiteDatabase,
  id: number,
  value: string,
) => {
  const updateQuery = `UPDATE ${todoTableName} SET value = '${value}' WHERE rowid = ${id}`;
  await db.executeSql(updateQuery);
};
