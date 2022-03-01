import React, { Fragment, useEffect, useState } from "react";

const ListRecords = () => {
	const [records, setRecords] = useState([]);
	console.log(records);

	const getRecords = async () => {
		const response = await fetch("http://localhost:4444/records");
		const data = await response.json();
		setRecords(data.payload);
	};






	const deleteRecord = async (id) => {
		const response = await fetch(`http://localhost:4444/records/${id}`, {
			method: "DELETE",
		});
		console.log(response);
		setRecords(records.filter((record) => record.id !== id));
	};

	useEffect(() => {
		getRecords();
	}, []);

	return (
		<Fragment>
			<div className="container mt-2">
				<div className="row">
					<div className="col-12">
						<table className="table table-image">
							<thead>
								<tr>
									<th>Artist</th>
									<th>Label</th>
									<th>Genre</th>
									<th>Year</th>
									<th>Country</th>
									<th>Digitalised</th>
									<th>Edit</th>
									<th>Delete</th>
									<th>Favourite</th>
								</tr>
							</thead>
							<tbody>
								{records.map((record) => (
									<tr key={record.id}>
										<td>{record.artist}</td>
										<td>{record.label}</td>
										<td>{record.genre}</td>
										<td>{record.year}</td>
										<td>{record.country}</td>
										<td>{record.digitalised}</td>
										<td>
											<button className="btn btn-info">Edit</button>
										</td>
										<td>
											
										</td>
										<td>
											<button className="fav-button">Favourite</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ListRecords;
