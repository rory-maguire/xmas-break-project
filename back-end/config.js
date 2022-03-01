export const db = {
	dbport: process.env.PGPORT,
	dbhost: process.env.PGHOST,
	username: process.env.PGUSERNAME,
	password: process.env.PGPASSWORD,
	dbname: process.env.PGNAME,
};

console.log(db);
