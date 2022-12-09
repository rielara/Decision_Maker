import { pool } from "../db/db.js";

export async function getRandomAnswer() {
  const data = await pool.query('SELECT answer FROM answers ORDER BY RANDOM() LIMIT 1;');
  console.log("This is the answer", data);
  return data.rows[0].answer;
};