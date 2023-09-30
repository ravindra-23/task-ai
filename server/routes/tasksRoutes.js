import express from "express";
import {
	createTask
} from "../controllers/tasksController.js";

const router = express.Router();

router.post("/", createTask);

export default router;