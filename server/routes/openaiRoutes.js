import express from "express";

import { createNewAiTask } from "../controllers/openaiController.js";

const router = express.Router();

router.post("/", createNewAiTask);

export default router;