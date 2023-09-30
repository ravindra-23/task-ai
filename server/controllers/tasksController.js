import { Task } from '../mongodb/models/task.js';

export const createTask = async (request, response) => {
	try {
		const {
			body: { title, description, category, priority, tags, notes }
		} = request;

		if (
			!title ||
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