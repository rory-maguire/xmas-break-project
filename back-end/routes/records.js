import express from "express";
const router = express.Router();
import cors from "cors";
router.use(cors());

import {
	getAllRecords,
	deleteRecordFromTable,
	getRecordById,
	addRecordToTable,
	updateRecordOnTable,
} from "../models/records.js";

router.use("/", async (req, res, next) => {
	console.log("request made at: ", Date());
	next();
});

router
	.route("/records")
	.post(async (req, res) => {
		const artist = req.body.artist;
		const label = req.body.label;
		const genre = req.body.genre;
		const year = req.body.year;
		const country = req.body.country;
		const digitalised = req.body.digitalised;

		console.log(req.body);
		const newRecord = await addRecordToTable(
			artist,
			label,
			genre,
			year,
			country,
			digitalised
		);
		res.json({
			success: true,
			message: "You added a record to your list: ",
			payload: newRecord,
		});
	})
	.get(async (req, res) => {
		const result = await getAllRecords();
		res.json({
			success: true,
			message: "Here is the current list of records: ",
			payload: result,
		});
	});

router

	.route("/records/:id")

	.delete(async (req, res) => {
		const id = req.params.id;
		await deleteRecordFromTable(id);
		res.json({
			success: true,
			message: "Successfully deleted record from list ",
		});
	})
	.get(async (req, res) => {
		const id = req.params.id;
		const result = await getRecordById(id);
		res.json({
			success: true,
			message: `Here is the record with id: ${id} `,
			payload: result,
		});
	})
	.put(async (req, res) => {
		const id = req.params.id;
		const artist = req.body.artist;
		const label = req.body.label;
		const genre = req.body.genre;
		const year = req.body.year;
		const country = req.body.country;
		const digitalised = req.body.country;

		const result = await updateRecordOnTable(
			artist,
			label,
			genre,
			year,
			country,
			digitalised,
			id
		);
		res.json({
			success: true,
			message: `Collection successfully updated`,
		});
	});

export default router;
