import express from "express";
import {
	createTask,
	getTasks,
	getTask,
	deleteTask
} from "../controllers/tasksController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

export default router;