import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
	apiKey: process.env['OPENAI_API_KEY'],
});

export const createNewAiTask = async (request, response) => {
	try {
		const { title } = request.body;
		const prompt = `You are an AI assistant for a task managing app. Create a task for "${title}".
        Please provide a JSON object response following this format:
        {
            "title": "${title}",
			"id": "A unique ID for the task in number",
            "description": "A description for this task",
            "category": "Category of the task",
            "priority": "HIGH or MEDIUM or LOW",
            "tags": ["tag1", "tag2"],
            "notes": "Write some notes to respect about this task"
        }`;

		const completion = await openai.completions.create({
			model: "gpt-3.5-turbo-instruct",
			prompt,
			max_tokens: 400,
		});
		return response
			.status(200)
			.json({ message: "Done", task: completion.choices[0].text });
	} catch (err) {
		console.log(err.message);
		return response
			.status(500)
			.send({ message: err.message || "Something went wrong" });
	}
};