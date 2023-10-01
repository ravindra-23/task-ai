import { useState } from "react";
import axios from 'axios';
import Loader from "./Loader";

const CreateTask = ({ styles, setCreatedTask, setCreated }) => {
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);
        const data = await axios.post(
            "https://task-ai.onrender.com/gpt",
            { title: prompt },
        );
        const task = await JSON.parse(data.data.task);
        setCreatedTask(task);
        setPrompt("");
        setLoading(false);
        setCreated(true);
    } catch (error) {
        console.log(error);
		setLoading(false);
    }
  }

  return (
    <div className={`${styles}`}>
        <form
            className="border border-brand rounded-[100px] backdrop-blur-md flex items-center justify-between"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your task..."
                className="py-1 pl-4 bg-background w-full rounded-l-[100px] outline-none caret-brand placeholder:text-text placeholder:opacity-60"
            />
            <button
                className="py-1 px-4 rounded-[100px] bg-brand hover:bg-custom_02 transition-all disabled:cursor-not-allowed flex items-center gap-2"
                type="submit"
                disabled={
                    prompt.split("").filter((l) => l != " ").length < 1 ||
                    prompt.length < 3 ||
                    loading
                }
            >
                {loading && <Loader />}
                {loading ? "Creating..." : "Create"}
            </button>
        </form>
    </div>
  )
}

export default CreateTask