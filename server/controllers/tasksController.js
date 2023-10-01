import { Task } from '../mongodb/models/task.js';

export const createTask = async (request, response) => {
	try {
		const {
			body: { title, id, description, category, priority, tags, notes }
		} = request;

		if (
			!title ||
			!id ||
			!description ||
			!category ||
			!priority ||
			!tags ||
			!notes
		) {
			return response.status(400).send({ message: "Missing required data" });
		}

		const newTask = {
			title,
			id,
			description,
			category,
			priority,
			tags,
			notes,
		};
		const task = await Task.create(newTask);
		return response.status(201).send(task);
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};

export const getTasks = async (request, response) => {
	try {
		const tasks = await Task.find({});
		return response.status(200).json({
			count: tasks.length,
			data: tasks,
		});
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};