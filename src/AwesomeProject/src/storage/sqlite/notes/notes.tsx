import {SQLiteDatabase} from 'react-native-sqlite-storage';
//  model type, cost, category, Additional description, image link
import {modelTableName} from '../model/models';

// Note id, note by (username – any name is accepted when inserting note), note date, note details
export type NoteItem = {
  id: number;
  note_note: string;
  user_name: string;
  note_date: string;
  note_details: string;
  model_id: number;
};

export const noteTableName = 'note';

export const createNoteTable = async (db: SQLiteDatabase) => {
  // create table if not exists

  const query = `CREATE TABLE IF NOT EXISTS ${noteTableName}
    (
      note_note TEXT NOT NULL,
      user_name TEXT NOT NULL,
      note_date TEXT NOT NULL,
      note_details TEXT NOT NULL,
      model_id INTEGER NOT NULL
      );`;
  // FOREIGN KEY (model_id) REFERENCES ${modelTableName}(rowid)

  await db.executeSql(query);
};

export const getNoteItems = async (db: SQLiteDatabase): Promise<NoteItem[]> => {
  try {
    const noteItems: NoteItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id, note_note, user_name, note_date, note_details, model_id FROM ${noteTableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        noteItems.push(result.rows.item(index));
      }
    });
    return noteItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get modelItems !!!');
  }
};

export const deleteNoteItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${noteTableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const dropNoteTable = async (db: SQLiteDatabase) => {
  const query = `DROP TABLE ${noteTableName}`;

  await db.executeSql(query);
};

export const createNoteItem = async ({
  db,
  note_note,
  user_name,
  note_date,
  note_details,
  model_id,
}: {
  db: SQLiteDatabase;
  note_note: string;
  user_name: string;
  note_date: string;
  note_details: string;
  model_id: number;
}) => {
  const insertQuery = `INSERT INTO ${noteTableName}(note_note, user_name, note_date, note_details, model_id) 
      values(
        '${note_note}',  
        '${user_name}',
        '${note_date}',
        '${note_details}',
        '${model_id}'
    )`;

  await db.executeSql(insertQuery);
};
