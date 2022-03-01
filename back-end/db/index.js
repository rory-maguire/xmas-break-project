import pg from "pg";

import { db } from "../config.js";

const pool = new pg.Pool({
	user: db.username,
	host: db.dbhost,
	database: db.dbname,
	password: db.password,
	port: db.dbport,
	// ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
	return pool.query(text, params);
}
