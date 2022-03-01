import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS records(id SERIAL PRIMARY KEY, artist TEXT, label TEXT, genre TEXT, year INTEGER, country TEXT)`;

async function createRecordsTable() {
	const res = await query(sqlString);
	console.log("table created:", res);
}

createRecordsTable();
