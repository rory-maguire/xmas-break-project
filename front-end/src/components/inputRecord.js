import React, { Fragment } from "react";
import { useState } from "react";

const InputRecords = () => {
	const [artist, setArtist] = useState("");
	const [label, setLabel] = useState("");
	const [genre, setGenre] = useState("");
	const [year, setYear] = useState("");
	const [country, setCountry] = useState("");
	const [digitalised, setDigitalised] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();
		const body = { artist, label, genre, year, country, digitalised };
		const response = await fetch("http://localhost:4444/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		console.log(response);
	};

	return (
		<Fragment>
			<div className="heading">
				<h1 className="title">Rory's Records</h1>
			</div>
			<div className="form">
				<form onSubmit={submitForm}>
					<input
						type="text"
						placeholder="Artist(s)"
						value={artist}
						onChange={(e) => setArtist(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Label"
						value={label}
						onChange={(e) => setLabel(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Genre"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Year"
						value={year}
						onChange={(e) => setYear(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Digitalised?"
						value={digitalised}
						onChange={(e) => setDigitalised(e.target.value)}
					/>
					<button className="btn btn-success">Add</button>
				</form>
			</div>
		</Fragment>
	);
};

export default InputRecords;
