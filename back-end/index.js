import express from "express";
import router from "./routes/records.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use("/", router);
app.use(cors());

app.listen(4444, () => {
	console.log(`Listening on port 4444`);
});

export default app;
