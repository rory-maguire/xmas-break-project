import query from "../db/index.js";

export async function getAllRecords() {
	const data = await query(`SELECT * FROM records;`);
	return data.rows;
}

export async function getRecordById(id) {
	const data = await query(`SELECT * FROM records WHERE id = $1;`, [id]);
	return data.rows;
}

export async function addRecordToTable(
	artist,
	label,
	genre,
	year,
	country,
	digitalised
) {
	const data = await query(
		`INSERT INTO records(artist, label, genre, year, country, digitalised) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
		[artist, label, genre, year, country, digitalised]
	);
	return data.rows;
}
22;
export async function deleteRecordFromTable(id) {
	const data = await query(`DELETE FROM records WHERE id = $1;`, [id]);
	return data.rows;
}

export async function updateRecordOnTable(
	artist,
	label,
	genre,
	year,
	country,
	digitalised,
	id
) {
	const data = await query(
		`UPDATE records SET artist = $1, label = $2, genre = $3, year = $4, country = $5, digitalised = $6 WHERE id = $7 `,
		[artist, label, genre, year, country, digitalised, id]
	);
	return data.rows;
}
