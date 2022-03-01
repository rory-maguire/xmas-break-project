CREATE DATABASE rorysrecords;

CREATE TABLE records(
 id SERIAL PRIMARY KEY, artist TEXT, label TEXT, genre TEXT, year INTEGER, country TEXT, digitalised TEXT
);