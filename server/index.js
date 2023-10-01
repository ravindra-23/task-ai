import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./mongodb/connect.js";
import tasksRoutes from './routes/tasksRoutes.js';
import openaiRoutes from './routes/openaiRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
	res.send('Hello From OPEN AI!');
})

app.use("/tasks", tasksRoutes);
app.use("/gpt", openaiRoutes);

const startServer = async () => {
	const port = process.env.PORT || 5000;

	try {
        connectDB(process.env.MONGODB_URL)
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	} catch (error) {
		console.log(error)
	}
}

startServer();